import KakaoMap from "@/components/atoms/map/kakaoMap";
import HomeTemplateStyle from "./homeTemplate.style";
import Search from "@/components/atoms/search";

const HomeTemplate = () => {
  return (
    <HomeTemplateStyle.Container>
      <KakaoMap>
        <Search />
      </KakaoMap>
    </HomeTemplateStyle.Container>
  );
};

export default HomeTemplate;
