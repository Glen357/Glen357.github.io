// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Page_Options from "./Pages/Page_Options/Page_Options";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer";
// import Tour1 from "./Pages/Tours/Tour1";
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
            {/* <Route path="/Tour1.jsx" element={Tour1} /> */}
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
            <h3>About In2WebDev</h3>
            <div className="contentComponent1Image">
              <img src="image" alt="" />
            </div>
            <div className="contentComponent1Info">
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>

        <div className="contentComponent2">
          <div className="shadow">
            <h3>Title</h3>
           
            <div className="contentComponent2Image">
            <Link to="../src/Pages/Page_Options"><img src="Image" alt="" /></Link>
              <div className="contentComponent2Info"> </div>
              <p></p>
            </div>
          </div>
        </div>

        <div className="contentComponent3">
          <div className="shadow">
            <h3>Title</h3>
            <div className="contentComponent3Image">
            <Link to="/Portfolio"><img src="Image" alt="" /></Link>
            </div>
            <div className="contentComponent3Info">
              <p></p>
              <p></p>
            </div>
          </div>
        </div>

        <div className="contentComponent4">
          <div className="shadow">
            <h3>Title</h3>
            <div className="contentComponent4Image">
            <Link to="/Contact"><img src="Image" alt="" /></Link>
              <div className="contentComponent4Info">
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
