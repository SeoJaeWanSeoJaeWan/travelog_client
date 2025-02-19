import KakaoMap from "@/components/atoms/kakaoMap";
import HomeTemplateStyle from "./homeTemplate.style";
import Board from "@/components/templates/board";
import { MapProvider } from "@/hooks/utils/useMap";
import { LogKeysProvider } from "@/hooks/utils/useLogKeys";
import Logo from "@/components/atoms/logo";

const HomeTemplate = () => {
  return (
    <MapProvider>
      <Logo />
      <LogKeysProvider>
        <HomeTemplateStyle.Container>
          <KakaoMap>
            <Board />
          </KakaoMap>
        </HomeTemplateStyle.Container>
      </LogKeysProvider>
    </MapProvider>
  );
};

export default HomeTemplate;
