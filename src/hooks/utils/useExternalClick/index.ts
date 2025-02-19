import { useEffect, useRef } from "react";

type useExternalClickProps = () => void;

const useExternalClick = <T extends HTMLElement>(
  callback: useExternalClickProps
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    });
  }, [callback]);

  return ref;
};

export default useExternalClick;
