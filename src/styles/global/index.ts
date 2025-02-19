import * as styled from "styled-components";

const Global = styled.createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;

    overflow: hidden;
    @media (min-width: ${(props) => props.theme.media.desktop}) {
      display: flex;
      justify-content: center;
    }
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

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox  */
  input[type="number"] {
    -moz-appearance: textfield;
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

  a {
    text-decoration: none;
    color: inherit;
  }

  .text-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  #print,
  #modal,
  #info {
    position: relative;
    z-index: 1000;
  }
`;

export default Global;
