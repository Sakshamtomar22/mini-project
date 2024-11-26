import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import restApi from "../restApi.json"; // Import the JSON data

const Navbar = () => {
  const [data, setData] = useState(null); // State to hold navbar data
  const [show, setShow] = useState(false); // State to toggle menu

  // Fetch the JSON data
  useEffect(() => {
    // Simulate data loading
    const extractedData = restApi.data[0]?.navbarLinks; // Access the `navbarLinks` correctly
    setData(extractedData);
  }, []);

  // Debugging: Log the data to ensure it's loaded correctly
  console.log("Navbar Data:", data);

  // Render a loading state while `data` is null
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <nav>
      
      <div className="logo"></div>
      
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {/* Map over the navbarLinks array */}
          {data.map((element) => (
            <Link
              to={element.link}
              spy={true}
              smooth={true}
              duration={500}
              key={element.id}
            >
              {element.title}
            </Link>
          ))}
        </div>
        <button className="menuBtn">OUR MENU</button>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
