import { CustomOverlayMap } from "react-kakao-maps-sdk";
import MarkerStyle from "./marker.style";
import Pin from "../../atoms/pin";
import { Pins } from "@/types/apis/pin";
import Line from "@/components/atoms/line";

interface MarkerProps {
  pins: Pins[];
  onClick: (id: number, lat: number, lng: number) => void;
}

const Marker = (props: MarkerProps) => {
  const { pins, onClick } = props;

  const path = pins.map(({ lat, lng }) => ({
    lat,
    lng,
  }));

  return (
    <>
      {pins.map(({ lat, lng, pinType, id }) => (
        <CustomOverlayMap
          key={id}
          position={{
            lat,
            lng,
          }}
        >
          <MarkerStyle.Container>
            <MarkerStyle.Pin onClick={() => onClick(id, lat, lng)}>
              <MarkerStyle.PinContainer>
                <Pin name={pinType} width={"30px"} />
              </MarkerStyle.PinContainer>
            </MarkerStyle.Pin>
            <MarkerStyle.Pulse />
          </MarkerStyle.Container>
        </CustomOverlayMap>
      ))}
      <Line path={path} />
    </>
  );
};

export default Marker;
