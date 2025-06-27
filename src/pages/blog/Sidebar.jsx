import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../store/blogSllice";
import { useScrollStiky } from "../../hooks/useScrollSticky";
import { capitalizeFirstLetter } from "../../utils";

// const categories = ["Blog", "Dev", "Product Management", "UX Design"];
export default function Sidebar() {
  const { selectedCategory, categories } = useSelector((state) => state.blog);
  const theme = useSelector((state) => state.blog.theme);
  const dispatch = useDispatch();
  const itemRef = useScrollStiky(85);

  return (
    <div className="w-[350px] py-[20px] px-[20px]">
      <div className="w-[300px] top-[95px] mr-[10px]" ref={itemRef}>
        {categories?.map((category, index) => {
          if (selectedCategory == index) {
            return (
              <div
                key={index}
                className={`py-[15px] pl-[15px] pr-[80px] ${"bg-[#0f6dbf12] text-[#0f6cbf] border-l-4"} cursor-pointer font-[600]`}
                onClick={() => dispatch(setSelectedCategory(index))}
              >
                {capitalizeFirstLetter(category.path)}
              </div>
            );
          }
          return (
            <div
              key={index}
              className={`py-[15px] pl-[15px] pr-[80px] ${`border-l-4 ${
                theme === "dark" ? "border-[#2E2E2E]" : "border-white"
              }`} cursor-pointer font-[600]`}
              onClick={() => dispatch(setSelectedCategory(index))}
            >
              {capitalizeFirstLetter(category.path)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
