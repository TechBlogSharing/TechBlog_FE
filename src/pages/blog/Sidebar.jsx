import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../store/blogSllice";

const categories = ["Blog", "Dev", "Product Management", "UX Design"];
export default function Sidebar() {
  const selectedCategory = useSelector((state) => state.blog.selectedCategory);
  const theme = useSelector((state) => state.blog.theme);
  const dispatch = useDispatch();
  return (
      <div className="w-[350px] p-[20px]">
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
  );
}
