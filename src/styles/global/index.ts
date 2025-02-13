import * as styled from "styled-components";
import pretendard from "@/fonts/PretendardVariable.woff2";

const Global = styled.createGlobalStyle`
  @font-face {
    font-family: "Pretendard";
    src: ${`url(${pretendard}) format('woff2')`};
    font-weight: 100 900;
    font-style: swap;
  }

  body {
    width: 100vw;
    height: 100vh;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: "Pretendard", sans-serif;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.color.lightGray};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color.gray};
    border-radius: 10px;

    cursor: pointer;
  }

  ul,
  ol {
    list-style: none;
  }

  button {
    background-color: transparent;
    border: none;

    cursor: pointer;
  }

  .text-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }
`;

export default Global;
