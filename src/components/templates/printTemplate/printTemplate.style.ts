import styled from "styled-components";

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  z-index: 10000;

  width: 100vw;
  /* height: 100vh; */

  background-color: white;

  * {
    color: ${(props) => props.theme.color.black};
  }

  @page {
    size: A4;
    margin: 10mm;

    .print-show {
      display: block;
    }
    .print-hide {
      display: none;
    }
  }
`;

const Title = styled.h1`
  margin-bottom: 5px;

  font-size: ${(props) => props.theme.font(24)};
  font-weight: bold;
  text-align: center;
`;

const TotalPrice = styled.p`
  font-size: ${(props) => props.theme.font(16)};
  font-weight: 600;
  text-align: right;

  padding-bottom: 10px;
  margin-bottom: 5px;

  border-bottom: 1px solid ${(props) => props.theme.color.gray};

  & > strong {
    font-size: ${(props) => props.theme.font(18)};
    font-weight: 700;
  }
`;

const DayTitle = styled.h2`
  font-size: ${(props) => props.theme.font(20)};
  font-weight: 600;

  margin-bottom: 20px;
`;

const DayPrice = styled.p`
  font-size: ${(props) => props.theme.font(14)};
  font-weight: 500;
  text-align: right;
`;

const PinContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const PinContentBox = styled.div`
  flex: 1;
`;

const PinImage = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;

  border-radius: 10px;
`;

const PinTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  font-size: ${(props) => props.theme.font(24)};
  font-weight: 600;

  margin-bottom: 10px;
`;

const PinDescription = styled.p`
  min-height: 150px;

  padding: 10px 0;

  border-top: 1px solid ${(props) => props.theme.color.gray};
  border-bottom: 1px solid ${(props) => props.theme.color.gray};

  font-size: ${(props) => props.theme.font(14)};
  font-weight: 500;
  white-space: pre-line;
`;

const PinPrice = styled.p`
  font-size: ${(props) => props.theme.font(14)};
  font-weight: 500;
  text-align: left;

  margin: 10px 0;
`;

const PinUrlContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
`;

const PinUrl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80px;

  P {
    margin-top: 5px;
    font-size: ${(props) => props.theme.font(12)};
    font-weight: 600;
    text-align: center;
    word-break: keep-all;
  }
`;

const DayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  break-after: page;

  padding-top: 10px;
  padding-bottom: 10px;
`;

const PinConteinr = styled.div`
  position: relative;
  break-inside: avoid;

  width: 100%;
  margin-bottom: 50px;
`;

const PrintTemplateStyle = {
  Container,
  Title,
  TotalPrice,
  DayTitle,
  DayPrice,
  PinContentContainer,
  PinContentBox,
  PinImage,
  PinTitle,
  PinDescription,
  PinPrice,
  PinUrlContainer,
  PinUrl,
  DayContainer,
  PinConteinr,
};

export default PrintTemplateStyle;
