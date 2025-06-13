import { useState, useEffect, useRef } from "react";
import { FaCalendarCheck } from "react-icons/fa";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { FaClock } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { useSelector } from "react-redux";
import { useScrollTop } from "../../hooks/useScrollTop";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useScrollStiky } from "../../hooks/useScrollSticky";
import { useNavigate } from "react-router";
const darkTheme = "bg-[#0d1117] text-white";
const lightTheme = "bg-white text-black";
export default function Post() {
  const [content, setContent] = useState("");
  const listNode = useRef([])
  const navigate = useNavigate();
  const theme = useSelector((state) => state.blog.theme);
  useScrollTop();
  const itemRef = useScrollStiky(50);
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-color-mode",
      theme === "light" ? "light" : "dark"
    );
  }, [theme]);
  useEffect(() => {
    console.log(listNode.current)
    fetch(
      "https://raw.githubusercontent.com/NguyenDangKhoa04072004/EngFlash/main/README.md"
    )
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  const buildTreeContent = (listNode) => {
    
  } 

  return (
    <div className={`flex ${theme === "dark" ? darkTheme : lightTheme}`}>
      <div className="flex w-[300px]">
        <div className="w-[300px] px-[20px] top-[80px]" ref={itemRef}>
          <div className="">
            <div
              className="flex items-center gap-[20px] text-[20px] p-[25px] cursor-pointer hover:text-[#0f6cbf] font-[600]"
              onClick={() => navigate("/blog")}
            >
              <FaArrowLeftLong />
              Back to Blog
            </div>
            <hr />
            <div className="p-[20px]">
              <div className="flex gap-[15px]">
                <img
                  className="w-[50px] h-[50px] rounded-[50%] object-cover"
                  src="data:image/png;base64,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"
                  alt=""
                />
                <div className="flex flex-col jusitfy-center">
                  <div className="font-[600] text-[#0f6cbf]">FPT Software</div>
                  <div className="font-[500]">Tech Company</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[10px] font-[400] text-[18px] p-[20px]">
              <div className="flex items-center gap-[20px]">
                <FaCalendarCheck />
                <div>April 13, 2025</div>
              </div>
              <div className="flex items-center gap-[20px]">
                <TbCategoryFilled />
                <div>Engineering</div>
              </div>
              <div className="flex items-center gap-[20px]">
                <FaClock />
                <div>13 min read</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1000px]">
        <MarkdownPreview
          source={content}
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
          className="p-[20px]"
          urlTransform={(url) =>
            `https://raw.githubusercontent.com/NguyenDangKhoa04072004/EngFlash/main/${url}`
          }
          rehypeRewrite={(node, index, parent) => {
            if (
              node.tagName === "a" &&
              parent &&
              /^h(1|2|3|4|5|6)/.test(parent.tagName)
            ) {
                parent.children = parent.children.slice(1);
                listNode.current.push(parent)
                // console.log(node,parent,index);
            }
          }}
        />
      </div>
      <div>
        <div>Table of content</div>
      </div>
    </div>
  );
}
