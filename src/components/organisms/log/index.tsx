import { IoMdDownload } from "react-icons/io";
import LogStyle from "./log.style";
import { FaPlus } from "react-icons/fa6";
import Title from "@/components/atoms/title";
import useModal from "@/hooks/utils/useModal";
import { BiExport } from "react-icons/bi";
import useLogKeys from "@/hooks/utils/useLogKeys";
import useLogsByKey from "@/hooks/apis/log/query/useLogsByKey";
import useCreateLog from "@/hooks/apis/log/mutation/useCreateLog";
import { Days } from "@/types/apis/day";
import useCheckKey from "@/hooks/apis/log/mutation/useCheckKey";
import { useState } from "react";
import useLog from "@/hooks/apis/log/query/useLog";
import { useRemoveDay } from "@/hooks/apis/day/query/useDay";
import { useRemovePin } from "@/hooks/apis/pin/query/usePin";

const getTravelDays = (days: Days[]) => {
  if (days.length === 0) return "여행 계획 중";
  else if (days.length === 1) return "당일치기";
  else return `${days.length - 1}박 ${days.length}일`;
};

const Log = () => {
  const [selectedLog, setSelectedLog] = useState<number | null>(null);
  const { createModal } = useModal();
  const { logKeys, updateLogKeys } = useLogKeys();
  const query = useLogsByKey(logKeys);

  const refetchLog = useLog(selectedLog);
  const removeDay = useRemoveDay();
  const removePin = useRemovePin();

  const createMutation = useCreateLog();
  const checkKeyMutation = useCheckKey();

  const handleAddLog = () => {
    const title = "새로운 여행";

    createMutation({ title }, ({ key }) => {
      updateLogKeys(key);
    });
  };

  const handleLoadLog = () => {
    createModal({
      text: "여행 코드",
      type: "form",
      confirm: (key) => {
        checkKeyMutation({ key }, ({ key }) => {
          updateLogKeys(key);
        });
      },
    });
  };

  const handleSelectLog = (id: number) => {
    setSelectedLog(id);

    removeDay();
    removePin();

    if (selectedLog) {
      refetchLog();
    }
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
        {query.data &&
          query.data.map(({ id, title, days }) => (
            <li key={id}>
              <LogStyle.Item onClick={() => handleSelectLog(id)}>
                <Title width={"100%"} as="p" className={"text-ellipsis"}>
                  {title}
                </Title>
                <LogStyle.TotalPrice>{getTravelDays(days)}</LogStyle.TotalPrice>
              </LogStyle.Item>
              <LogStyle.SaveButton>
                <BiExport size={20} />
              </LogStyle.SaveButton>
            </li>
          ))}
      </LogStyle.List>
    </LogStyle.Container>
  );
};

export default Log;
