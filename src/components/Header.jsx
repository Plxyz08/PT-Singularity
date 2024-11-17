import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../services/authService";
import petLogo from "../assets/svgs/pet.svg";
import "./../styles/header.css";

const Header = ({ menuItems }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = (item) => {
    const section = document.getElementById(item.id);

    if (item.id === "services" && section) {
      const topOffset = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topOffset - 100,
        behavior: "smooth",
      });
      navigate(`/home?section=${item.id}`);
    } else if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      navigate(`/home?section=${item.id}`);
    }
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo" title="Logo">
        <img src={petLogo} alt="Logo" className="logo-image" />
      </div>
      <nav className="menu">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`menu-item ${
              item.id === "services" ? "services-item" : ""
            }`}
            onClick={() => handleMenuClick(item)}
          >
            {item.label}
          </button>
        ))}
        <button
          className="menu-item logout"
          onClick={logout}
          title="Logout"
        >
          <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
