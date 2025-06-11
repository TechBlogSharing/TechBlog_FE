import BreadCums from "../components/Breadcums";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../pages/blog/Sidebar";

export default function BlogLayout({ children }) {
  return (
    <>
      <Header />
      <BreadCums />
      {children}
      <Footer
        previous={{ url: "/", label: "Home" }}
        next={{ url: "/member", label: "Member" }}
      />
    </>
  );
}
