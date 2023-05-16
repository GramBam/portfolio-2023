import { MutableRefObject, useEffect } from "react";

const useOutsideClick = (ref: MutableRefObject<any>, callback: () => void) => {
  const onClick = (e: MouseEvent) => {
    return ref.current && !ref.current.contains(e.target) && callback();
  };
  useEffect(() => {
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  });
};

export default useOutsideClick;
