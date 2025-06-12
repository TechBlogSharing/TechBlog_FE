import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router";
import { FaArrowUp } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdMoon } from "react-icons/io";
import { FaSun } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/blogSllice";
export default function Header() {
  const navigate = useNavigate();
  const showScrollTop = useSelector((state) => state.blog.showScrollTop);
  const theme = useSelector((state) => state.blog.theme);
  const dispatch = useDispatch();
  return (
    <div className="bg-[#0f6cbf] flex items-center justify-between px-[30px] py-[10px] sticky top-0 z-10 ">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          className="w-[60px]"
          src="https://static.vecteezy.com/system/resources/previews/018/930/721/non_2x/blogger-logo-blogger-icon-transparent-free-png.png"
        />
        <h1 className="text-[25px] font-[600] text-white">Tech Blog</h1>
      </div>
      <div className="flex items-center gap-[20px] text-white ">
        {theme === "light" ? (
          <FaSun onClick={() => dispatch(setTheme("dark"))} className="cursor-pointer" size={25}/>
        ) : theme === "dark" ? (
          <IoMdMoon onClick={() => dispatch(setTheme("light"))} className="cursor-pointer" size={25}/>
        ) : (
          ""
        )}
        <div className="bg-[#0000003a] flex items-center justify-between p-[10px] gap-[10px] w-[280px] focus-within:w-[500px] transition-all duration-600">
          <IoMdSearch color="white" size={25} />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 outline-none"
          />
        </div>
        <div>
          <FaCircleUser size={30} className="cursor-pointer" />
        </div>
      </div>
      {showScrollTop && (
        <button
          className="flex items-center justify-center gap-[10px] absolute top-[100px] left-[50%] -translate-x-[50%] bg-white py-[12px] px-[15px] rounded-full shadow-2xl cursor-pointer hover:bg-[#0f6cbf] hover:text-white transition-all duration-150"
          onClick={() => window.scrollTo(0, 0)}
        >
          <FaArrowUp />
          Back to top
        </button>
      )}
    </div>
  );
}
