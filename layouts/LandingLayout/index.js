import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LandingLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default LandingLayout;
