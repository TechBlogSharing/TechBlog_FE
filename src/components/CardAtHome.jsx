

export default function Card({
    img, title, body, but
}) {
  return (
    <>
      <div className="w-[400px] mb-[80px] transform transition-transform duration-600 hover:-translate-y-5 cursor-pointer">
        <div className="w-[400px] h-[400px] overflow-hidden rounded-t-lg">
          <img
            src={img}
            className="w-full h-full object-cover transform transition-transform duration-600 hover:scale-105 cursor-pointer"
          />
        </div>

        <div className="rounded-b-lg text-black bg-white px-3 py-3 flex flex-col items-center">
          <h1 className="text-[25px] font-semibold text-[#0f6cbf]">
            {title}
          </h1>
          <h1>
            {body}
          </h1>
          <button
            className="border bg-[#0f6cbf] text-white text-[15px] font-semibold rounded-full px-5 py-2 
            transform transition-transform duration-600 rotate-y-0 hover:shadow-xl hover:-translate-y-2 cursor-pointer
            "
          >
            {but}
          </button>
        </div>
      </div>
    </>
  );
}
