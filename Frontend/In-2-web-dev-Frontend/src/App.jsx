import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Page_Options from "./Pages/Page_Options/Page_Options";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer";
import Info_page from "./Pages/Info page/Info_page"


import "./App.css";

// Routes function here
function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/Home" />} /> */This is how I
            made App.jsx the home page /*
            <Route path="/Home" Component={Home} />
            <Route path="/Page_Options" Component={Page_Options} />
            <Route path="/Portfolio" Component={Portfolio} />
            <Route path="/Contact" Component={Contact} />
            <Route path="/content/:id" element={<Info_page />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

const Home = () => {
  return (
    <>
      <div>
        <div className="NavBar">
          <NavBar />
        </div>
        <Header />
      </div>
      <div className="ContentContainer">
        <div className="contentComponent1">
          <div className="shadow">
            <div className="contentComponent1Image">
              <Link to="/content/Info_page">
                <img src="image-400x100.jpg" alt="" />
              </Link>
            </div>
            <div className="contentComponent1Info">
              <h3>About In2WebDev</h3>
              <p>
                In2WebDev is a site I created to advertise Website build and
                maintenance services, and to but also as a form of portfolio to
                display my work and abilities as a Web-developer.{" "}
              </p>{" "}
              <br />
              <p>
                Please use the contact form on the last page to request builds
                and services, or if you have any job opportunities to discuss.{" "}
              </p>{" "}
              <br />{" "}
              <p>
                {" "}
                Click on the image above to find further information about
                In2Web dev and its owner
              </p>
            </div>
          </div>
        </div>

        <div className="contentComponent2">
          <div className="shadow">
            <div className="contentComponent2Image">
              <Link to="../src/Pages/Page_Options">
                <img src="image-400x100.jpg" alt="" />
              </Link>
              <div className="contentComponent2Info"> </div>
              <h3>Page Build Options</h3>
              <p></p>
            </div>
          </div>
        </div>

        <div className="contentComponent3">
          <div className="shadow">
            <div className="contentComponent3Image">
              <Link to="/Portfolio">
                <img src="image-400x100.jpg" alt="" />
              </Link>
            </div>
            <div className="contentComponent3Info">
              <h3>Portfolio</h3>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>

        <div className="contentComponent4">
          <div className="shadow">
            <div className="contentComponent4Image">
              <Link to="./Pages/Contact/Contact.jsx">
                <img src="image-400x100.jpg" alt="" />
              </Link>
              <div className="contentComponent4Info">
                <h3>Contact</h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default App;
