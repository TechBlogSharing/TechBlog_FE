import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowScrollTop } from "../../store/blogSllice";
import Sidebar from "./Sidebar";
import Content from "./Content";

const darkTheme = "bg-[#2E2E2E] text-white";
const lightTheme = "bg-white text-black";

export default function BlogPage() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.blog.theme);
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
  }, [window.scrollY]);
  return (
    <div className={theme === "dark" ? darkTheme : lightTheme}>
      <div className="flex">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}
