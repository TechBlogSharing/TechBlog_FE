import BlogCard from "./BlogCard";

export default function Content() {
  return (
    <div className="flex-3 pt-[10px] ">
        <h1 className="text-[40px] mb-[20px] font-[600]">Blog</h1>
        <div className="grid grid-cols-3 gap-[25px]">
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </div>
    </div>
  );
}
