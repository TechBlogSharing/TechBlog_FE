import ronaldo from "../../assets/ronaldo.webp";
import Card from "../../components/CardAtHome";
import ronaldoCard from "../../assets/ronaldoCard.jpg";
import { NavLink } from "react-router";

export default function HomePage() {
  const title1 = "Knowledge Sharing";
  const title2 = "Members";
  const title3 = "About me";
  const body1 = "";
  const body2 ="";
  const body3 = "";
  const but1 = "Learn more";
  const but2 = "See more"
  const but3 = "Read more"
  const url1 = "/blog"
  const url3 = "/introduce"
  const url2 = "/member";
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#0f6cbf] to-[#000066] text-white  ">
        <div className="flex gap-[30px] justify-center ">
          <div className="mt-[50px] ml-[50px] w-[800px] animate-fadeIn">
            <h1 className="text-[40px] font-bold ">
              Defining the Future of Tech.
            </h1>
            <h2 className="text-[20px] mt-[30px]">
              TechBlog is the website for sharing knowledge about Information
              Technology. It is built by NhaTrangInternship Team.
            </h2>
            <div className="mt-[40px] flex gap-[20px]">
              <NavLink
                to="/blog"
                className="bg-white rounded-lg text-black text-[20px] font-semibold px-6 py-2 hover:bg-[#00CCFF] hover:text-white transition"
              >
                Get Start
              </NavLink>
              <a
                href="https://github.com/TechBlogSharing"
                className="border-2 border-white rounded-lg text-white text-[20px] font-semibold px-6 py-2 hover:bg-[#00CCFF] hover:text-white hover:border-transparent transition"
              >
                View on Github
              </a>
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
            img={ronaldoCard}
            title={title1}
            body={body1}
            but={but1}
            url={url1}
          />
          <Card img={ronaldoCard} title={title2} body={body2} but={but2} url={url2} />
          <Card img={ronaldoCard} title={title3} body={body3} but={but3} url={url3} />
        </div>
      </div>
    </>
  );
}
