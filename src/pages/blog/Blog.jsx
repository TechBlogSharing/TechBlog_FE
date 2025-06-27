import { useSelector } from "react-redux";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { useScrollTop } from "../../hooks/useScrollTop";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../utils";
import { setCategoies } from "../../store/blogSllice";
const darkTheme = "bg-[#0d1117] text-white";
const lightTheme = "bg-white text-black";

export default function BlogPage() {
  const theme = useSelector((state) => state.blog.theme);
  useScrollTop();
  const { selectedCategory } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchContent = async () => {
      const categories = await fetchCategories();
      dispatch(setCategoies(categories));
    };
    fetchContent()
  }, [selectedCategory]);

  return (
    <div className={theme === "dark" ? darkTheme : lightTheme}>
      <div className="flex px-[80px] py-[30px]">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}
