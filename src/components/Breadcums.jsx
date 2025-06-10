import { NavLink } from "react-router";

const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Blog",
    path: "/blog",
  },
];
const activeLinkStyle = "";
const inActiveLinkStyle = "opacity-[.67] hover:opacity-[1]";
export default function BreadCums() {
  return (
    <div className="flex items-center gap-[20px] h-[50px] bg-[#0f6cbf] relative px-[50px] py-[10px] text-white shadow-md">
      {links.map((link, index) => (
        <NavLink to={link.path} key={index} className={({isActive}) => isActive ? activeLinkStyle : inActiveLinkStyle}>
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}
