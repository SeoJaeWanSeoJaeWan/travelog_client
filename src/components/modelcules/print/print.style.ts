import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  width: 100vw;
  height: 100vh;

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
  margin-bottom: 10px;

  font-size: ${(props) => props.theme.font(24)};
  font-weight: bold;
  text-align: center;
`;

const TotalPrice = styled.p`
  font-size: ${(props) => props.theme.font(16)};
  font-weight: 600;
  text-align: right;

  padding-bottom: 10px;
  margin-bottom: 15px;

  border-bottom: 1px solid ${(props) => props.theme.color.gray};

  & > strong {
    font-size: ${(props) => props.theme.font(18)};
    font-weight: 700;
  }
`;

const DayTitle = styled.h2`
  font-size: ${(props) => props.theme.font(18)};
  font-weight: 600;

  margin-top: 10px;
`;

const DayPrice = styled.p`
  font-size: ${(props) => props.theme.font(14)};
  font-weight: 500;
  text-align: right;
`;

const PinContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const PinContentBox = styled.div`
  flex: 1;
`;

const PinImage = styled.img`
  width: 200px;
  height: auto;
  aspect-ratio: 4/3;

  object-fit: cover;
`;

const PinTitle = styled.h3`
  font-size: ${(props) => props.theme.font(16)};
  font-weight: 600;
`;

const PinDescription = styled.p`
  font-size: ${(props) => props.theme.font(14)};
  font-weight: 500;
  white-space: pre-line;
`;

const PinPrice = styled.p`
  font-size: ${(props) => props.theme.font(14)};
  font-weight: 400;
  text-align: right;
`;

const PinUrlContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
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
  }
`;

const PrintStyle = {
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
};

export default PrintStyle;
