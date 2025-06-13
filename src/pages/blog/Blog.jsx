
import { useSelector } from "react-redux";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { useScrollTop } from "../../hooks/useScrollTop";

const darkTheme = "bg-[#0d1117] text-white";
const lightTheme = "bg-white text-black";

export default function BlogPage() {
  const theme = useSelector((state) => state.blog.theme);
  useScrollTop();
  return (
    <div className={theme === "dark" ? darkTheme : lightTheme}>
      <div className="flex px-[80px] py-[30px]">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}
