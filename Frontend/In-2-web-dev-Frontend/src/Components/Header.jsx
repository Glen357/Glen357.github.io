import { useEffect } from 'react';
// import NavBar from './NavBar'
import './Header.css'



const Header = () => {
  useEffect(() => {
    const image = document.querySelector('.Icon'); // useEffect hook is used to start the spinning animation when the component mounts
    let angle = 0;

    const interval = setInterval(() => {
      angle += 1; // Adjust the speed by changing the increment value
      image.style.transform = `rotate(${angle}deg)`;
    }, 10); // Adjust the interval for smoother or slower animation

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);
  return (
    <div className='header'>
        <div className='Icon'><img src="image-200x200.jpg" alt="Icon" /></div>
        <h1>In2WebDev</h1>
    </div>
  )
}

export default Header;