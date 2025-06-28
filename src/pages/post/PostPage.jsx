import { useSelector } from "react-redux";
import { useScrollTop } from "../../hooks/useScrollTop";
import { useEffect } from "react";
import TableOfContent from "./TableofContent";
import Sidebar from "./Sidebar";
import Content from "./Content";

const darkTheme = "bg-[#0d1117] text-white";
const lightTheme = "bg-white text-black";

export default function Post() {
  const theme = useSelector((state) => state.blog.theme);
  useScrollTop();

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-color-mode",
      theme === "light" ? "light" : "dark"
    );
  }, [theme]);

  return (
    <div className={`flex ${theme === "dark" ? darkTheme : lightTheme}`}>
      <Sidebar />
      <Content />
      <TableOfContent />
    </div>
  );
}
