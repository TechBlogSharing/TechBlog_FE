import { useEffect, useState } from "react";

export const useFetchMeta = (topic, blogName) => {
  const [meta, setMeta] = useState();
  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/TechBlogSharing/TechBlog_DB/main/topics/${topic}/${blogName}/meta.json`
    )
      .then(async (response) => {
        const json = await response.json();
        if (response.ok) return json;
      })
      .then((json) => {
        setMeta(json);
      })
      .catch((e) => console.log(e));
  }, [topic, blogName]);

  return meta;
};
