import ronaldo from "../../assets/ronaldo.webp";
import Card from "../../components/CardAtHome";
import ronaldoCard from "../../assets/ronaldoCard.jpg";

export default function HomePage() {
  const title = "Knowledge Sharing";
  const body =
    "After 120 minutes, penalties were needed to decide the winner of the 2025 UEFA Nations League final between Portugal and Spain in front of 65,852 fans at Munich’s Allianz Arena. Martin Zubimendi (21’) and Mikel Oyarzabal (45’) had scored for Spain, and Nuno Mendes (26’) and Cristiano Ronaldo (61’) were the scorers for Portugal in what was a tightly contested affair.";
  const but = "Read more";
  const url = "/member"
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#0f6cbf] to-[#000066] text-white  ">
        <div className="flex gap-[30px] justify-center ">
          <div className="mt-[50px] ml-[50px] w-[800px] animate-fadeIn">
            <h1 className="text-[40px] font-bold ">
              Knowledge Sharing Repository
            </h1>
            <h2 className="text-[20px] mt-[30px]">
              Summary of knowledge-sharing content during the research and
              project development process by ThucTapNhaTrang.
            </h2>
            <div className="mt-[40px] flex gap-[20px]">
              <button className="bg-white rounded-lg text-black text-[20px] font-semibold px-6 py-2 hover:bg-[#00CCFF] hover:text-white transition">
                Get Start
              </button>
              <button className="border-2 border-white rounded-lg text-white text-[20px] font-semibold px-6 py-2 hover:bg-[#00CCFF] hover:text-white hover:border-transparent transition">
                View on Github
              </button>
            </div>
          </div>
          <div className="animate-wiggle">
          <img
            src={ronaldo}
            className=" perspective(1000px) w-[600px] h-[300px] rounded-lg mt-[50px] mr-[50px] shadow-2xl object-cover
              transform transition-transform duration-600 skew-y-0 hover:-skew-y-2 "
          />
          </div>
          </div>

        <div className="animate-fadeUp flex flex-col items-center mt-[50px] gap-[20px]">
          <h1 className="text-white text-[20px] font-semibold rounded-full shadow-xl bg-[#3366FF] px-5 py-2">
            WHAT WE DO
          </h1>
          <h1 className="text-[40px] font-bold">Our Activities</h1>
          <h1 className="text-[20px] opacity-70">
            Explore our diverse range of activities and achievements
          </h1>
        </div>

        <div className="animate-fadeUp flex gap-[50px] mr-[20px] ml-[20px] mt-[50px] justify-center">
          <Card
              img= {ronaldoCard}
              title= {title}
              body= {body}
              but= {but}
              url = {url}
            
          />
          <Card
              img= {ronaldoCard}
              title= {title}
              body= {body}
              but= {but}
            
          />
          <Card
              img= {ronaldoCard}
              title= {title}
              body= {body}
              but= {but}
            
          />
        </div>
      </div>
    </>
  );
}
