import { useNavigate } from "react-router";
import { useFetchMeta } from "../../hooks/useFetchMeta";

export default function BlogCard({ topic, title }) {
  const navigate = useNavigate();
  const meta = useFetchMeta(topic, title);
  return (
    <div
      className="cursor-pointer h-[530px]"
      onClick={() => navigate(`/${topic}/post/${title.replace(" ", "%20")}/`)}
    >
      <div className="h-[190px]">
        <img
          className="object-cover w-[100%] rounded-lg h-[100%]"
          src={meta?.thumnail}
          alt="Thumnail"
        />
      </div>
      <div className="flex flex-col gap-[10px] py-[10px] h-[240px] ">
        <h1 className="text-[25px] font-[700]">{title}</h1>
        <p className="text-[18px] overflow-hidden text-ellipsis" >{meta?.description}</p>
      </div>
      <div className="flex items-center gap-[20px] py-[20px]">
        <div>
          <img
            className="w-[50px] h-[50px] object-cover rounded-[50%]"
            src={meta?.avartar}
            alt="Avatar"
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <div className="font-[700] hover:underline">{meta?.author}</div>
          <div>
            {meta?.publishDay} ⋅ {meta?.min} min read
          </div>
        </div>
      </div>
    </div>
  );
}
