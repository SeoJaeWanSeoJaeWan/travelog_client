import { useState } from "react";

const StorageKey = "logKeys";
const rawKeys = localStorage.getItem(StorageKey) || "[]";

const useLogKeys = () => {
  const [logKeys, setLogKeys] = useState<string[]>(JSON.parse(rawKeys));

  const updateStorage = (newKeys: string[]) => {
    localStorage.setItem(StorageKey, JSON.stringify(newKeys));
  };

  const updateLogKeys = (newKey: string) => {
    setLogKeys((prev) => {
      const newKeys = Array.from(new Set([...prev, newKey]));
      updateStorage(newKeys);

      return newKeys;
    });
  };

  const removeLogKey = (key: string) => {
    setLogKeys((prev) => {
      const newKeys = prev.filter((k) => k !== key);
      updateStorage(newKeys);

      return newKeys;
    });
  };

  return { logKeys, updateLogKeys, removeLogKey };
};

export default useLogKeys;
