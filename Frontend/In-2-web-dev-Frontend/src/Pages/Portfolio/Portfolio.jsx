// import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import "../../../src/App.css";




const Portfolio = () => {
  return (
    <>
     <div className="HeaderContainer">
          <div className="NavBar">
            <NavBar />
          </div>
          <Header />
        </div>
      {/* <div className="pageContainer">  */}
      <div className="ContentContainer">     
        <div className="contentComponent1">
          <div className="shadow">
            <h3></h3>
            <div className="contentComponent1Image">
            {/* <Link to="./Tour1.jsx"> */}
            <img src="Image" alt="" />
            {/* </Link> */}
            </div>
            <div className="contentComponent1Info">
              <p></p>
            </div>
          </div>
        </div>

        <div className="contentComponent2">
          <div className="shadow">
            <h3></h3>
            <div className="contentComponent2Image">
              <img src="Image" alt="" />
            </div>
            <div className="contentComponent2Info">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="contentComponent3">
          <div className="shadow">
            <h3></h3>
            <div className="contentComponent3Image">
              <img src="Image" alt="" />{" "}
            </div>
            <div className="contentComponent3Info">
              <ul>
              <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="contentComponent4">
          <div className="shadow">
            <h3></h3>
            <div className="contentComponent4Image">
              <img src="Image" alt="" />
              <div className="contentComponent4Info"> </div>
              <ul>
              <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div>
        <Footer />
      </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default Portfolio;
