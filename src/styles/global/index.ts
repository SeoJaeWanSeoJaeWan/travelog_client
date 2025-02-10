import * as styled from "styled-components";
import pretendard from "@/fonts/PretendardVariable.woff2";

const Global = styled.createGlobalStyle`
  @font-face {
    font-family: "Pretendard";
    src: ${`url(${pretendard}) format('woff2')`};
    font-weight: 100 900;
    font-style: swap;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: "Pretendard", sans-serif;
  }
`;

export default Global;
