import { Link } from "react-router-dom";
// import buttonImage1 from "/Home+Text.png";
// import buttonImage2 from "/Tours.jpg";
// import buttonImage3 from "/Events.png"
// import buttonImage4 from "/Contact.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <div className="NavContainer">
        {/* <div className="Icon"><img src="image-200x200.jpg" alt="" /></div> */}
        <Link to="/Home">
          {/* <img src={buttonImage1} alt="Home" /> */}<strong>Home</strong>
        </Link>
        <Link to="/Page_Options">
          {/* <img src={buttonImage2} alt="Tours" />*/}<strong>Page_Options</strong> 
        </Link>
        <Link to="/Portfolio">
          {/* <img src={buttonImage3} alt="Events" />*/}<strong>Portfolio</strong> 
        </Link>
        <Link to="/Contact">
          {/* <img src={buttonImage4} alt="Contact" />*/}<strong>Contact</strong> 
        </Link>
      </div>
    </div>
  );
};

export default NavBar;