import {
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
  useState,
} from "react";
import useInfo from "../useInfo";

export interface SearchKeywordResult {
  position: {
    lat: number;
    lng: number;
  };
  content: string;
}

interface MapContextValue {
  map: React.RefObject<kakao.maps.Map | null> | null;
  clickMapState: boolean;
  //
  searchKeyword: (
    keyword: string,
    callback: (result: SearchKeywordResult[]) => void
  ) => void;
  updateCenter: (lat: number, lng: number) => void;
  addRightClick: (
    callback: (lat: number, lng: number) => void,
    cancel: () => void
  ) => void;
  removeRightClick: () => void;
  cancelRightClick: () => void;
}

const MapContext = createContext<MapContextValue | null>(null);

const getKakaoMap = () => {
  return kakao.maps;
};

export const MapProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const mapRef = useRef<kakao.maps.Map | null>(null);
  const eventRef = useRef<Function | null>(null);
  const cancelRef = useRef<Function | null>(null);
  const [clickMapState, setClickMapState] = useState(false);
  const { createInfo } = useInfo();

  const searchKeyword = (
    keyword: string,
    callback: (result: SearchKeywordResult[]) => void
  ) => {
    const kakaoMap = getKakaoMap();

    const ps = new kakaoMap.services.Places();

    ps.keywordSearch(keyword, (data, status) => {
      if (status === kakaoMap.services.Status.OK) {
        const result = [] as SearchKeywordResult[];

        data.forEach((place) => {
          result.push({
            position: {
              lat: Number(place.y),
              lng: Number(place.x),
            },
            content: place.place_name,
          });
        });

        callback(result);
      }
    });
  };

  const updateCenter = (lat: number, lng: number) => {
    if (mapRef.current) {
      mapRef.current.panTo(new kakao.maps.LatLng(lat, lng));
    }
  };

  const rightClick =
    (callback: (lat: number, lng: number) => void) =>
    (e: kakao.maps.event.MouseEvent) => {
      const lat = e.latLng.getLat();
      const lng = e.latLng.getLng();

      updateCenter(lat, lng);
      callback(lat, lng);
    };

  const addRightClick = (
    success: (lat: number, lng: number) => void,
    cancel: () => void
  ) => {
    if (mapRef.current) {
      const click = rightClick(success);

      kakao.maps.event.addListener(mapRef.current, "rightclick", click);
      eventRef.current = click;
      createInfo("마우스 오른쪽 클릭을 통해 위치를 지정해주세요.");

      cancelRef.current = cancel;
      setClickMapState(true);
    }
  };

  const removeRightClick = () => {
    if (mapRef.current) {
      const click = eventRef.current;

      if (click) {
        kakao.maps.event.removeListener(mapRef.current, "rightclick", click);
        setClickMapState(false);
      }
    }
  };

  const cancelRightClick = () => {
    if (cancelRef.current) {
      createInfo("");
      cancelRef.current();
      removeRightClick();
    }
  };

  return (
    <MapContext.Provider
      value={{
        map: mapRef,
        clickMapState,
        //
        searchKeyword,
        updateCenter,
        addRightClick,
        removeRightClick,
        cancelRightClick,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

const useMap = () => {
  const context = useContext(MapContext);

  if (!context) {
    throw new Error("useMap must be used within MapProvider");
  }

  return context;
};

export default useMap;
