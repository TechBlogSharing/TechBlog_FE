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
import { useNavigate, useParams } from "react-router";
import { getTocMarkdownText } from "markdown-table-of-content";
import TableOfContent from "./TableofContent";
import { useFetchMeta } from "../../hooks/useFetchMeta";
import { capitalizeFirstLetter } from "../../utils";
const darkTheme = "bg-[#0d1117] text-white";
const lightTheme = "bg-white text-black";
const base_url =
  "https://raw.githubusercontent.com/TechBlogSharing/TechBlog_DB/main/topics";
export default function Post() {
  const [content, setContent] = useState("");
  const [tableOfContent, setTableOfContent] = useState("");
  const { blogName, topic } = useParams();
  const meta = useFetchMeta(topic, blogName);
  const previewRef = useRef([]);
  const navigate = useNavigate();
  const { categories, selectedCategory } = useSelector((state) => state.blog);
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
    fetch(`${base_url}/${topic}/${blogName}/index.md`)
      .then((res) => res.text())
      .then((text) => {
        setContent(text);
        setTableOfContent(getTocMarkdownText(text));
      });
  }, [categories, selectedCategory]);

  return (
    <div className={`flex ${theme === "dark" ? darkTheme : lightTheme}`}>
      <div className="flex w-[300px]">
        <div className="w-[300px] px-[20px] top-[80px]" ref={itemRef}>
          <div>
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
                  src={meta?.avartar}
                  alt="Avatar"
                />
                <div className="flex flex-col jusitfy-center">
                  <a className="font-[600] text-[#0f6cbf]" href={meta?.profile}>
                    {meta?.author}
                  </a>
                  <div className="font-[500]">{meta?.jobTitle}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[10px] font-[400] text-[18px] p-[20px]">
              <div className="flex items-center gap-[20px]">
                <FaCalendarCheck />
                <div>{meta?.publishDay}</div>
              </div>
              <div className="flex items-center gap-[20px]">
                <TbCategoryFilled />
                <div>{capitalizeFirstLetter(topic)}</div>
              </div>
              <div className="flex items-center gap-[20px]">
                <FaClock />
                <div>{meta?.min} min read</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1000px]" ref={previewRef}>
        <MarkdownPreview
          source={content}
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
          className="p-[20px]"
          urlTransform={(url) => {
            if (!url.startsWith("http")) {
              return `${base_url}/${topic}/${blogName}/${url}`;
            } else {
              return url;
            }
          }}
          rehypeRewrite={(node, index, parent) => {
            if (
              node.tagName === "a" &&
              parent &&
              /^h(1|2|3|4|5|6)/.test(parent.tagName)
            ) {
              parent.children = parent.children.slice(1);
            }
          }}
        />
      </div>
      <TableOfContent tableOfContent={tableOfContent} />
    </div>
  );
}
