import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { useSelector } from "react-redux";
export default function ProfileCard({info}) {
    const theme = useSelector((state) => state.blog.theme);
  return (
    <a className="cursor-pointer" href={info?.github}>
      <div className="border-[#0f6cbf] border-[3px] flex p-[10px] gap-[20px] items-center justify-center rounded-2xl">
        <div className="flex flex-col gap-[10px] p-[10px]">
          <div>
            <img
              src={info?.avartar}
              alt="Avartar"
              className="w-[150px] h-[150px] rounded-[50%] object-cover border-[3px] border-[#0f6cbf]"
            />
          </div>
          <div className="flex items-center justify-center p-[10px] gap-[10px]">
            <a href={info?.facebook}>
              <FaFacebook size={35} color="#1877F2" />
            </a>
            <a href={info?.github}>
              <FaGithub size={35} color={theme === "dark" ? "white" : "#181717"} />
            </a>
            <a href={info?.linkedin}>
              <FaLinkedin size={35} color="#0A66C2" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center flex-1 gap-[10px] p-[20px]">
          <div className="text-[30px] font-[700]">{info?.name}</div>
          <div className="text-[25px] font-[500] text-[#ACADA8]">
            {info?.jobTitle}
          </div>
          <p className="text-wrap text-center italic text-[#ACADA8]">
            {info?.description}
          </p>
        </div>
      </div>
    </a>
  );
}
