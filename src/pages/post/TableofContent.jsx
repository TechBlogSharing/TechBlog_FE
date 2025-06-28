import MarkdownPreview from "@uiw/react-markdown-preview";
import { useScrollStiky } from "../../hooks/useScrollSticky";
import { useState, useEffect } from "react";
import { getTocMarkdownText } from "markdown-table-of-content";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
const base_url =
  "https://raw.githubusercontent.com/TechBlogSharing/TechBlog_DB/main/topics";
export default function TableOfContent() {
  const itemRef = useScrollStiky(50);
  const { categories, selectedCategory } = useSelector((state) => state.blog);
  const { blogName, topic } = useParams();
  const [toc, setTableOfContent] = useState("");
  useEffect(() => {
    fetch(`${base_url}/${topic}/${blogName}/index.md`)
      .then((res) => res.text())
      .then((text) => {
        setTableOfContent(getTocMarkdownText(text));
      });
  }, [categories, selectedCategory]);
  return (
    <div className="flex w-[350px]">
      <div
        className="flex flex-col items-center w-[350px] gap-[10px] h-[100%] top-[80px] pt-[10px] overflow-scroll"
        ref={itemRef}
      >
        <div className="text-[25px] font-[700]">Table of content</div>
        <MarkdownPreview source={toc} className="p-[10px]" />
      </div>
    </div>
  );
}
