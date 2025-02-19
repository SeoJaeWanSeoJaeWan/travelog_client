import styled from "styled-components";

const UrlList = styled.ul`
  width: 100%;
  height: 60px;

  overflow-y: auto;

  border-top: 1px solid ${(props) => props.theme.color.gray};
  border-bottom: 1px solid ${(props) => props.theme.color.gray};

  padding: 5px 0;
`;

const Url = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  width: 100%;
  margin-top: 3px;

  a {
    width: calc(100% - 16px - 5px);

    display: block;
    font-size: ${(props) => props.theme.font(14)};
  }
`;

const UrlDeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 16px;
  height: 16px;

  color: ${(props) => props.theme.color.red};
`;

const UrlStyle = {
  UrlList,
  Url,
  UrlDeleteButton,
};

export default UrlStyle;
