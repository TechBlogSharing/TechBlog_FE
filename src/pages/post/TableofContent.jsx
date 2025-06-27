import MarkdownPreview from "@uiw/react-markdown-preview";
import { useScrollStiky } from "../../hooks/useScrollSticky";
export default function TableOfContent({ tableOfContent }) {
  const itemRef = useScrollStiky(50);
  return (
    <div className="flex w-[350px]">
      <div className="flex flex-col items-center w-[350px] gap-[10px] top-[80px] pt-[10px]" ref={itemRef}>
        <div className="text-[25px] font-[700]">Table of content</div>
        <MarkdownPreview source={tableOfContent} style={{}} />
      </div>
    </div>
  );
}
