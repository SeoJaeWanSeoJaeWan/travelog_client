import { createContext, PropsWithChildren, useContext, useState } from "react";

const StorageKey = "logKeys";
const rawKeys = localStorage.getItem(StorageKey) || "[]";

interface LogKeysContextValue {
  logKeys: string[];
  updateLogKeys: (newKey: string) => void;
  removeLogKey: (key: string) => void;
}

const LogKeysContext = createContext<LogKeysContextValue | null>(null);

export const LogKeysProvider = (props: PropsWithChildren) => {
  const { children } = props;
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

  return (
    <LogKeysContext.Provider value={{ logKeys, updateLogKeys, removeLogKey }}>
      {children}
    </LogKeysContext.Provider>
  );
};

const useLogKeys = () => {
  const context = useContext(LogKeysContext);

  if (!context) {
    throw new Error("useLogKeys must be used within a LogKeysProvider");
  }

  return context;
};

export default useLogKeys;
