import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadCums from "../components/Breadcums";
export default function HomeLayout({ children }) {
  return (
    <>
      <Header />
      <BreadCums/>
      {children}
      <Footer
        previous={{ url: "/member", label: "Member" }}
      />
    </>
  );
}
