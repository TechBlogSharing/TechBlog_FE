import Markdown from "react-markdown";
import { useState, useEffect } from "react";
import ReactDom from "react-dom"
export default function Post() {
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/TickLabVN/knowledge/main/docs/blog/posts/engineering/basic-expresss.js/basic-express.js.md"
    )
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);
  ReactDom.render(<ReactMarkdown># Hello, *world*!</ReactMarkdown>, document.body)
}
