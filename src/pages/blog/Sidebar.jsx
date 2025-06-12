import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../store/blogSllice";
import { useEffect, useRef } from "react";

const categories = ["Blog", "Dev", "Product Management", "UX Design"];
export default function Sidebar() {
  const selectedCategory = useSelector((state) => state.blog.selectedCategory);
  const theme = useSelector((state) => state.blog.theme);
  const dispatch = useDispatch();
  const sideBar = useRef();
  const handleSticky = () => {
    if (window.scrollY < 85) {
      sideBar.current.style.position = "static";
    } else {
      sideBar.current.style.position = "fixed";
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  }, []);
  return (
    <div className="w-[350px] py-[20px] px-[20px]">
      <div className="w-[300px] top-[95px] mr-[10px]" ref={sideBar}>
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className={`py-[15px] pl-[15px] pr-[80px] ${
                selectedCategory === index
                  ? "bg-[#0f6dbf12] text-[#0f6cbf] border-l-4"
                  : `border-l-4 ${
                      theme === "dark" ? "border-[#2E2E2E]" : "border-white"
                    }`
              } cursor-pointer font-[600]`}
              onClick={() => dispatch(setSelectedCategory(index))}
            >
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
}
