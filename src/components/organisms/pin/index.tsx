import Title from "@/components/atoms/title";
import PinStyle from "./pin.style";
import Close from "@/components/atoms/close";
import LineStyle from "@/components/atoms/line/line.style";

const Pin = () => {
  return (
    <>
      <PinStyle.Container>
        <PinStyle.InfoContainer>
          <PinStyle.InfoWrapper>
            <Title as={"h4"} width={"90%"}>
              123
            </Title>
            <PinStyle.Description>
              dqwqdwqwddqwqdwqwddqwqdwqwddqwqdwqwddqwqdwqwddqwqdwqwddqwqdwqwddqwqdwqwddqwqdwqwddqwqdwqwd
              dqwqdwqwddqwqdwqwd dqwqdwqwddqwqdwqwd dqwqdwqwddqwqdwqwd
            </PinStyle.Description>
          </PinStyle.InfoWrapper>
          <PinStyle.Type alt={"pin"} />
        </PinStyle.InfoContainer>

        <LineStyle />

        <Close />

        <PinStyle.UrlList>
          <li>
            <a href={"https://www.naver.com"} className="text-ellipsis">
              https://www.naver.com https://www.naver.com https://www.naver.com
            </a>
          </li>
          <li>
            <a href={"https://www.naver.com"} className="text-ellipsis">
              https://www.naver.com https://www.naver.com https://www.naver.com
            </a>
          </li>
          <li>
            <a href={"https://www.naver.com"} className="text-ellipsis">
              https://www.naver.com https://www.naver.com https://www.naver.com
            </a>
          </li>
          <li>
            <a href={"https://www.naver.com"} className="text-ellipsis">
              https://www.naver.com https://www.naver.com https://www.naver.com
            </a>
          </li>
          <li>
            <a href={"https://www.naver.com"} className="text-ellipsis">
              https://www.naver.com https://www.naver.com https://www.naver.com
            </a>
          </li>
          <li>
            <a href={"https://www.naver.com"} className="text-ellipsis">
              https://www.naver.com https://www.naver.com https://www.naver.com
            </a>
          </li>
          <li>
            <a href={"https://www.naver.com"} className="text-ellipsis">
              https://www.naver.com https://www.naver.com https://www.naver.com
            </a>
          </li>
          <li>
            <a href={"https://www.naver.com"} className="text-ellipsis">
              https://www.naver.com https://www.naver.com https://www.naver.com
            </a>
          </li>
          <li>
            <a href={"https://www.naver.com"} className="text-ellipsis">
              https://www.naver.com https://www.naver.com https://www.naver.com
            </a>
          </li>
          <li>
            <a href={"https://www.naver.com"} className="text-ellipsis">
              https://www.naver.com https://www.naver.com https://www.naver.com
            </a>
          </li>
          <li>
            <a href={"https://www.naver.com"} className="text-ellipsis">
              https://www.naver.com https://www.naver.com https://www.naver.com
            </a>
          </li>
          <li>
            <a href={"https://www.naver.com"} className="text-ellipsis">
              https://www.naver.com https://www.naver.com https://www.naver.com
            </a>
          </li>
          <li>
            <a href={"https://www.naver.com"} className="text-ellipsis">
              https://www.naver.com https://www.naver.com https://www.naver.com
            </a>
          </li>
          <li>
            <a href={"https://www.naver.com"} className="text-ellipsis">
              https://www.naver.com https://www.naver.com https://www.naver.com
            </a>
          </li>
          <li>
            <a href={"https://www.naver.com"} className="text-ellipsis">
              https://www.naver.com https://www.naver.com https://www.naver.com
            </a>
          </li>
        </PinStyle.UrlList>

        <PinStyle.ButtonList>
          <PinStyle.Button>내용 수정</PinStyle.Button>
          <PinStyle.Button>링크 추가</PinStyle.Button>
        </PinStyle.ButtonList>

        <PinStyle.Image />
      </PinStyle.Container>
    </>
  );
};

export default Pin;
