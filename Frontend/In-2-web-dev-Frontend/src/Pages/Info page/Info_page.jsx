import Header from "../../Components/Header";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import "./Contact.css";

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
