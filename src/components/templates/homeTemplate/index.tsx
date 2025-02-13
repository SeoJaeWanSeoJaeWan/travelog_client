import KakaoMap from "@/components/atoms/map/kakaoMap";
import HomeTemplateStyle from "./homeTemplate.style";
import Board from "@/components/templates/board";

const HomeTemplate = () => {
  return (
    <HomeTemplateStyle.Container>
      <KakaoMap>
        <Board />
      </KakaoMap>
    </HomeTemplateStyle.Container>
  );
};

export default HomeTemplate;
