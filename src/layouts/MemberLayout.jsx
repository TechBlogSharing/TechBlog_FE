import BreadCums from "../components/Breadcums";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../pages/blog/Sidebar";

export default function MemberLayout({ children }) {
  return (
    <>
      <Header />
      <BreadCums />
      {children}
      <Footer
        previous={{ url: "/blog", label: "Blog" }}
        next={{ url: "/introduce", label: "About us" }}
      />
    </>
  );
}
