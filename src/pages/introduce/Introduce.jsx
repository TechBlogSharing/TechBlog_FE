import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MarkdownPreview from "@uiw/react-markdown-preview";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { useScrollTop } from "../../hooks/useScrollTop";
export default function Introduce() {
  const [content, setContent] = useState("");
  const theme = useSelector((state) => state.blog.theme);
  useScrollTop();
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/TechBlogSharing/TechBlog_FE/main/README.md"
    )
      .then((res) => res.text())
      .then((text) => {
        setContent(text);
      });
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-color-mode",
      theme === "light" ? "light" : "dark"
    );
  }, [theme]);

  return (
    <div >
      <MarkdownPreview
        source={content}
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        className="p-[40px]"
        urlTransform={(url) => {
          if (!url.startsWith("http")) {
            return `https://raw.githubusercontent.com/TechBlogSharing/TechBlog_FE/main/${url}`;
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
  );
}
