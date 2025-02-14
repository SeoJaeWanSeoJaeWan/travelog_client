import { CustomOverlayMap } from "react-kakao-maps-sdk";
import MarkerStyle from "./marker.style";
import Pin from "../../atoms/pin";
import { PinName } from "@/types/apis/pinType";

interface MarkerProps {
  lat: number;
  lng: number;
  name: PinName;
  onClick: () => void;
}

const Marker = (props: MarkerProps) => {
  const { lat, lng, name, onClick } = props;

  return (
    <CustomOverlayMap
      position={{
        lat,
        lng,
      }}
    >
      <MarkerStyle.Container>
        <MarkerStyle.Pin onClick={onClick}>
          <MarkerStyle.PinContainer>
            <Pin name={name} width={"30px"} />
          </MarkerStyle.PinContainer>
        </MarkerStyle.Pin>
        <MarkerStyle.Pulse />
      </MarkerStyle.Container>
    </CustomOverlayMap>
  );
};

export default Marker;
