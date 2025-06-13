import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setShowScrollTop } from "../store/blogSllice";

export const useScrollTop = () => {
   const dispatch = useDispatch();
  const currentscrollY = useRef(0);
  const handleScrollTop = () => {
    if (window.scrollY > 0 && window.scrollY <= currentscrollY.current) {
      dispatch(setShowScrollTop(true));
    } else {
      dispatch(setShowScrollTop(false));
    }
    currentscrollY.current = window.scrollY;
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);

    return () => window.removeEventListener("scroll", handleScrollTop);
  }, []); 
}