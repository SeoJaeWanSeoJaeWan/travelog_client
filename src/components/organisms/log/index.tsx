import { IoMdDownload } from "react-icons/io";
import LogStyle from "./log.style";
import { FaPlus, FaPrint } from "react-icons/fa6";
import Title from "@/components/atoms/title";
import useLogKeys from "@/hooks/utils/useLogKeys";
import useLogsByKey from "@/hooks/apis/log/query/useLogsByKey";
import useCreateLog from "@/hooks/apis/log/mutation/useCreateLog";
import { Days } from "@/types/apis/day";
import { useState } from "react";
import useLog from "@/hooks/apis/log/query/useLog";
import { useRemoveDay } from "@/hooks/apis/day/query/useDay";
import { useRemovePin } from "@/hooks/apis/pin/query/usePin";
import LoadLogForm from "@/components/modelcules/loadLogForm";
import KakaoShare from "@/utils/kakaoShare";
import { PiExportBold } from "react-icons/pi";

const getTravelDays = (days: Days[]) => {
  if (days.length === 0) return "여행 계획 중";
  else if (days.length === 1) return "당일치기";
  else return `${days.length - 1}박 ${days.length}일`;
};

const Log = () => {
  const [selectedLog, setSelectedLog] = useState<number | null>(null);
  const { logKeys, updateLogKeys } = useLogKeys();
  const [isShowLoad, setIsShowLoad] = useState(false);
  const query = useLogsByKey(logKeys);

  const refetchLog = useLog(selectedLog);
  const removeDay = useRemoveDay();
  const removePin = useRemovePin();

  const createMutation = useCreateLog();

  const handleAddLog = () => {
    const title = "새로운 여행";

    createMutation({ title }, ({ key }) => {
      updateLogKeys(key);
    });
  };

  const handleLoadLog = () => {
    setIsShowLoad((prev) => !prev);
  };

  const handleSelectLog = (id: number) => {
    setSelectedLog(id);

    removeDay();
    removePin();

    if (selectedLog) {
      refetchLog();
    }
  };

  const handlePrintLog = (id: number) => {
    const newTab = window.open(
      `${import.meta.env.VITE_CLIENT_URL}/print`,
      "_blank"
    );

    if (newTab) {
      newTab.onload = () => {
        newTab.postMessage(
          { id, type: "child" },
          import.meta.env.VITE_CLIENT_URL
        );
      };
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

      {isShowLoad && <LoadLogForm />}

      <LogStyle.List>
        {query.data &&
          query.data.map(({ id, title, days, key }) => (
            <li key={id}>
              <LogStyle.Item
                onClick={() => handleSelectLog(id)}
                $isActive={id === selectedLog}
              >
                <Title width={"100%"} as="p" className={"text-ellipsis"}>
                  {title}
                </Title>
                <LogStyle.TotalPrice>{getTravelDays(days)}</LogStyle.TotalPrice>
              </LogStyle.Item>
              <LogStyle.PrintButton onClick={() => handlePrintLog(id)}>
                <FaPrint size={20} />
              </LogStyle.PrintButton>
              <LogStyle.SaveButton onClick={() => KakaoShare(key)}>
                <PiExportBold size={22} />
              </LogStyle.SaveButton>
            </li>
          ))}
      </LogStyle.List>
    </LogStyle.Container>
  );
};

export default Log;
