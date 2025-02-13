import Title from "@/components/atoms/title";
import PinDetailStyle from "./pinDetail.style";
import Close from "@/components/atoms/close";
import LineStyle from "@/components/atoms/line/line.style";

const PinDetail = () => {
  return (
    <>
      <PinDetailStyle.Container>
        <Title as={"h4"} width={"90%"}>
          123
        </Title>
        <PinDetailStyle.Description>
          dqwqdwqwddqwqdwqwddqwqdwqwddqwqdwqwddqwqdwqwddqwqdwqwddqwqdwqwddqwqdwqwddqwqdwqwddqwqdwqwd
          dqwqdwqwddqwqdwqwd dqwqdwqwddqwqdwqwd dqwqdwqwddqwqdwqwd
        </PinDetailStyle.Description>

        <LineStyle />

        <Close />

        <PinDetailStyle.UrlList>
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
        </PinDetailStyle.UrlList>

        <PinDetailStyle.ButtonList>
          <PinDetailStyle.Button>내용 수정</PinDetailStyle.Button>
          <PinDetailStyle.Button>링크 추가</PinDetailStyle.Button>
        </PinDetailStyle.ButtonList>

        <PinDetailStyle.Image />
      </PinDetailStyle.Container>
    </>
  );
};

export default PinDetail;
