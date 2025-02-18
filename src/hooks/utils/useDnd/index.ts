import { useRef } from "react";

const useDnd = () => {
  const changeIndex = useRef(-1);

  const onChange = (index: number) => {
    changeIndex.current = index;
  };

  const onUpdate =
    (callback: (id: number, index: number) => void) =>
    ({ id, index }: { id: number; index: number }) => {
      const updateIndex = changeIndex.current;

      if (updateIndex !== index && updateIndex !== -1) {
        callback(id, updateIndex);
      }
    };

  return { onChange, onUpdate };
};

export default useDnd;
