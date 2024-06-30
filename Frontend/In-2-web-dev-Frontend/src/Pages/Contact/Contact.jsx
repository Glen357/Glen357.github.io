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

        <div className="formContainer">
          <form id="details" action="mailto:codaallday@gmail.com" method="post">
            <div>
              <label htmlFor="Name">Name</label>
              <br />
              <input id="Name" type="text" />
            </div>
            <br />
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <input id="email" type="text" />
            </div>
            <br />
            <div>
              <label htmlFor="contact phone number">Email</label>
              <br />
              <input id="contact phone number" type="text" />
            </div>
            <br />
            <div id="Phone Number">
              <label htmlFor="message">Leave us a message</label>
              <br />
              <textarea
                id="message"
                rows="1"
                placeholder="Type your message here"
              ></textarea>
            </div>
            <br />
            <div>
              <input type="checkbox" id="stay in touch" />
              Sign up to our Newsletter
            </div>
            <br />
            <button type="submit">Send Email</button>
          </form>
        </div>
      </div>
      <div className="FooterSpace">
          <Footer />
        </div>
    </>
  );
};

export default Contact;
