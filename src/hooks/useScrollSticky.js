import { useEffect, useRef } from "react";
export const useScrollStiky = (stickyPoint) => {
  const itemRef = useRef();
  const handleSticky = () => {
    if (window.scrollY < stickyPoint) {
      itemRef.current.style.position = "static";
    } else {
      itemRef.current.style.position = "fixed";
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  }, []);
  return itemRef
};
