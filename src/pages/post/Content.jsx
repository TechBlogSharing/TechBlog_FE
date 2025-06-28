import MarkdownPreview from "@uiw/react-markdown-preview";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
const base_url =
  "https://raw.githubusercontent.com/TechBlogSharing/TechBlog_DB/main/topics";
export default function Content() {
  const [content, setContent] = useState("");
  const { blogName, topic } = useParams();

  const { categories, selectedCategory } = useSelector((state) => state.blog);
  useEffect(() => {
    fetch(`${base_url}/${topic}/${blogName}/index.md`)
      .then((res) => res.text())
      .then((text) => {
        setContent(text);
      });
  }, [categories, selectedCategory]);
  return (
    <div className=" w-[calc(100%-650px)]">
      <MarkdownPreview
        source={content}
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        className="p-[20px] flex flex-col"
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
  );
}
