import {
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { NavLink } from "react-router";

export default function Footer({ next, previous }) {
  return (
    <>
      <footer className="text-white">
        <nav className="bg-[#303030] flex justify-between py-6 ">
          {previous ? (
            <NavLink to={previous.url}
              className="flex gap-[20px] items-end ml-[20px] hover:opacity-80 transition-opacity"
            >
              <FaArrowLeft className="text-[18px]" />
              <div className="flex flex-col ">
                <span className="text-[12px] text-[#DCDCDC] self-start ">
                  Previous
                </span>
                <div className="text-[18px] font-semibold">{previous.label}</div>
              </div>
            </NavLink>
          ) : (
            <div></div>
          )}

          { next ? (
          <NavLink
            to={next.url}
            className="flex gap-[20px] items-end mr-[20px] hover:opacity-80 transition-opacity"
          >
            <div className="flex flex-col ">
              <span className="text-[12px] text-[#DCDCDC] self-end">Next</span>
              <div className="text-[18px] font-semibold">{next.label}</div>
            </div>

            <FaArrowRight className="text-[18px]" />
          </NavLink> ): <div></div>
          }
        </nav>
        <div className="bg-[#282828] flex justify-between py-3">
          <div className="text-sm text-gray-300 ml-[20px]">
            Copyright © 2025 ThucTapNhaTrang. Made by Engineering team.
          </div>
          <div className="flex gap-[20px] mr-[20px]">
            <a
              href=""
              className="opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              <FaGithub />
            </a>
            <a
              href=""
              className="opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              <FaFacebook />
            </a>
            <a
              href=""
              className="opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              <SiGmail />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
