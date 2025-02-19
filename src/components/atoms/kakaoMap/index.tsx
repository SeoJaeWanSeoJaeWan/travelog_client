import useMap from "@/hooks/utils/useMap";
import { PropsWithChildren, useEffect, useState } from "react";
import { Map, useKakaoLoader } from "react-kakao-maps-sdk";
import KakaoMapStyle from "./kakaoMap.style";
import { CgClose } from "react-icons/cg";

const KakaoMap = (props: PropsWithChildren) => {
  const { children } = props;
  const { map, clickMapState, cancelRightClick } = useMap();
  const [initCenter, setInitCenter] = useState({
    lat: 37.566535,
    lng: 126.9779692,
  });

  useKakaoLoader({
    appkey: "e92f3de1386bcb7d39b4f118b5a48d36",
    libraries: ["services"],
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setInitCenter({ lat: latitude, lng: longitude });
    });
  }, []);

  return (
    <Map
      center={initCenter}
      isPanto
      ref={map}
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {children}

      {clickMapState && (
        <KakaoMapStyle.CancelButton onClick={cancelRightClick}>
          <CgClose size={16} />
        </KakaoMapStyle.CancelButton>
      )}
    </Map>
  );
};

export default KakaoMap;
