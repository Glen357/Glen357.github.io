import Header from "../../Components/Header";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import "./Contact.css";

// This page is not loading correctly. I think I will try to use this page 
// to start using my Database

const Contact = () => {
  return (
    <>
      <div className="pageContainer ">
        <div className="HeaderContainer">
          <div className="NavBar">
            <NavBar />
          </div>

          <Header />
        </div>
      <div>
        <h1>Information about In2WebDev and its developer</h1>
        <p>Many informations </p>
      </div>
      </div>

      <div className="FooterSpace">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
