import KakaoMap from "@/components/atoms/map/kakaoMap";
import HomeTemplateStyle from "./homeTemplate.style";
import Board from "@/components/organisms/board";

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
