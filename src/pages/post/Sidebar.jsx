import { useFetchMeta } from "../../hooks/useFetchMeta";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useScrollStiky } from "../../hooks/useScrollSticky";
import { useNavigate, useParams } from "react-router";
import { FaClock } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { capitalizeFirstLetter } from "../../utils";

export default function Sidebar() {
  const { blogName, topic } = useParams();
  const navigate = useNavigate();
  const meta = useFetchMeta(topic, blogName);
  const itemRef = useScrollStiky(50);
  return (
    <div className="flex w-[300px]">
      <div className="w-[300px] px-[20px] top-[80px]" ref={itemRef}>
        <div>
          <div
            className="flex items-center gap-[20px] text-[20px] p-[25px] cursor-pointer hover:text-[#0f6cbf] font-[600]"
            onClick={() => navigate("/blog")}
          >
            <FaArrowLeftLong />
            Back to Blog
          </div>
          <hr />
          <div className="p-[20px]">
            <div className="flex gap-[15px]">
              <img
                className="w-[50px] h-[50px] rounded-[50%] object-cover"
                src={meta?.avartar}
                alt="Avatar"
              />
              <div className="flex flex-col jusitfy-center">
                <a className="font-[600] text-[#0f6cbf]" href={meta?.profile}>
                  {meta?.author}
                </a>
                <div className="font-[500]">{meta?.jobTitle}</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] font-[400] text-[18px] p-[20px]">
            <div className="flex items-center gap-[20px]">
              <FaCalendarCheck />
              <div>{meta?.publishDay}</div>
            </div>
            <div className="flex items-center gap-[20px]">
              <TbCategoryFilled />
              <div>{capitalizeFirstLetter(topic)}</div>
            </div>
            <div className="flex items-center gap-[20px]">
              <FaClock />
              <div>{meta?.min} min read</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
