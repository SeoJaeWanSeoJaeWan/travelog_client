import styled from "styled-components";

const CancelButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;

  background-color: ${(props) => props.theme.color.shadow};
  /* border: 2px solid ${(props) => props.theme.color.black}; */
  border-radius: 50%;
  color: ${(props) => props.theme.color.lightGray};
`;

const KakaoMapStyle = {
  CancelButton,
};

export default KakaoMapStyle;
