import { createContext, PropsWithChildren, useContext, useRef } from "react";

export interface SearchKeywordResult {
  position: {
    lat: number;
    lng: number;
  };
  content: string;
}

interface MapContextValue {
  map: React.RefObject<kakao.maps.Map | null> | null;
  searchKeyword: (
    keyword: string,
    callback: (result: SearchKeywordResult[]) => void
  ) => void;
  updateCenter: (lat: number, lng: number) => void;
  addRightClick: (callback: (lat: number, lng: number) => void) => void;
  removeRightClick: () => void;
}

const MapContext = createContext<MapContextValue | null>(null);

const getKakaoMap = () => {
  return kakao.maps;
};

export const MapProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const mapRef = useRef<kakao.maps.Map | null>(null);
  const eventRef = useRef<Function | null>(null);

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

  const addRightClick = (callback: (lat: number, lng: number) => void) => {
    if (mapRef.current) {
      const click = rightClick(callback);

      kakao.maps.event.addListener(mapRef.current, "rightclick", click);
      eventRef.current = click;
    }
  };

  const removeRightClick = () => {
    if (mapRef.current) {
      const click = eventRef.current;

      if (click)
        kakao.maps.event.removeListener(mapRef.current, "rightclick", click);
    }
  };

  return (
    <MapContext.Provider
      value={{
        map: mapRef,
        //
        searchKeyword,
        updateCenter,
        addRightClick,
        removeRightClick,
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
