import { IoMdDownload } from "react-icons/io";
import LogStyle from "./log.style";
import { FaPlus } from "react-icons/fa6";
import Title from "@/components/atoms/title";
import numberWithCommas from "@/utils/numberWithCommas";
import useModal from "@/hooks/utils/useModal";

const Log = () => {
  const { createModal } = useModal();

  const handleAddLog = () => {
    createModal({
      text: "여행명",
      type: "form",
      confirm: (value) => {
        console.log(value);
      },
    });
  };

  const handleLoadLog = () => {
    createModal({
      text: "여행 계획을 삭제하시겠습니까?",
      type: "info",
      confirm: () => {},
    });
  };

  return (
    <LogStyle.Container>
      <LogStyle.ButtonList>
        <LogStyle.Button onClick={handleAddLog}>
          <FaPlus /> 추가
        </LogStyle.Button>
        <LogStyle.Button onClick={handleLoadLog}>
          <IoMdDownload /> 불러오기
        </LogStyle.Button>
      </LogStyle.ButtonList>

      <LogStyle.List>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>
              {numberWithCommas(1000000)}원
            </LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
      </LogStyle.List>
    </LogStyle.Container>
  );
};

export default Log;
