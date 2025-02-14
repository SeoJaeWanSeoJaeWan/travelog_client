import { IoMdDownload } from "react-icons/io";
import LogStyle from "./log.style";
import { FaPlus } from "react-icons/fa6";
import Title from "@/components/atoms/title";
import useModal from "@/hooks/utils/useModal";
import { BiExport } from "react-icons/bi";

interface LogProps {
  handleStep: (step: number) => void;
}

const Log = (props: LogProps) => {
  const { handleStep } = props;
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
          <LogStyle.Item onClick={() => handleStep(1)}>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
          <LogStyle.SaveButton>
            <BiExport size={20} />
          </LogStyle.SaveButton>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
        <li>
          <LogStyle.Item>
            <Title width={"100%"} as="p" className={"text-ellipsis"}>
              제목
            </Title>
            <LogStyle.TotalPrice>3박 4일</LogStyle.TotalPrice>
          </LogStyle.Item>
        </li>
      </LogStyle.List>
    </LogStyle.Container>
  );
};

export default Log;
