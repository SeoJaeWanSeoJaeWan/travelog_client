import { color } from "@/styles/theme";
import { Polyline } from "react-kakao-maps-sdk";

interface LineProps {
  path: Array<{ lat: number; lng: number }>;
}

const Line = (props: LineProps) => {
  const { path } = props;

  return (
    <Polyline
      path={path}
      strokeWeight={4}
      strokeColor={color.primary}
      strokeOpacity={0.7}
      strokeStyle={"solid"}
    />
  );
};

export default Line;
