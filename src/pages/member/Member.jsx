import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import { useSelector } from "react-redux";
const darkTheme = "bg-[#0d1117] text-white";
const lightTheme = "bg-white text-black";
export default function Member() {
  const [members, setMembers] = useState([]);
  const theme = useSelector((state) => state.blog.theme);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/TechBlogSharing/TechBlog_DB/main/member.json"
    )
      .then(async (response) => {
        const json = response.json();
        if (response.ok) return json;
      })
      .then((json) => setMembers(json.members));
  }, []);

  return (
    <div className={`${theme === "dark" ? darkTheme : lightTheme} h-[calc(100vh-170px)] grid grid-cols-2 p-[40px] gap-[30px]`}>
      {members.map((member, index) => (
        <ProfileCard key={index} info={member} />
      ))}
    </div>
  );
}
