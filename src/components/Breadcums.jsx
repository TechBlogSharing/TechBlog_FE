import { useEffect, useRef } from "react";
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
  {
    label: "Member",
    path: "/member",
  },
  {
    label: "About me",
    path: "/introduce"
  }
];
const activeLinkStyle = "";
const inActiveLinkStyle = "opacity-[.67] hover:opacity-[1]";
export default function BreadCums() {
  const breadcums = useRef();
  const handleScrollTop = () => {
    if (window.scrollY <= 5) {
      breadcums.current.style.visibility = "visible";
      breadcums.current.classList.add("animate-faded");
    } else {
      breadcums.current.style.visibility = "hidden";
      breadcums.current.classList.remove("animate-faded");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);

    return () => window.removeEventListener("scroll", handleScrollTop);
  }, []);
  return (
    <div className="h-[50px] bg-[#0f6cbf] relative px-[50px] py-[10px] text-white shadow-md">
      <div className="flex items-center gap-[20px]" ref={breadcums}>
        {links.map((link, index) => (
          <NavLink
            to={link.path}
            key={index}
            className={({ isActive }) =>
              isActive ? activeLinkStyle : inActiveLinkStyle
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
