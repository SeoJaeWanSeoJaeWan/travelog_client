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
}

const MapContext = createContext<MapContextValue | null>(null);

const getKakaoMap = () => {
  return kakao.maps;
};

export const MapProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const mapRef = useRef<kakao.maps.Map | null>(null);

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
      mapRef.current.setCenter(new kakao.maps.LatLng(lat, lng));
    }
  };

  return (
    <MapContext.Provider
      value={{
        map: mapRef,
        //
        searchKeyword,
        updateCenter,
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
