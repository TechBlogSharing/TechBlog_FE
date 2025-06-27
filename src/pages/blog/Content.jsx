import { useSelector } from "react-redux";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../utils";
export default function Content() {
  const { selectedCategory, categories } = useSelector((state) => state.blog);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`${categories[selectedCategory]?.url}`)
      .then(async (response) => {
        const json = await response.json();
        if (response.ok) return json;
      })
      .then((json) => {
        setBlogs(json.tree);
      })
      .catch((e) => console.log(e));
  }, [categories, selectedCategory]);

  return (
    <div className="flex-3 pt-[10px] min-h-[calc(100vh-200px)]">
      <h1 className="text-[40px] mb-[20px] font-[600]">
        {capitalizeFirstLetter(categories[selectedCategory]?.path)}
      </h1>
      <div className="grid grid-cols-3 gap-[25px]">
        {blogs.map((blog, index) => (
          <BlogCard
            title={blog.path}
            key={index}
            url={blog.url}
            topic={categories[selectedCategory].path}
          />
        ))}
      </div>
    </div>
  );
}
