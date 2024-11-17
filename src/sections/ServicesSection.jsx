import DogIco from "../assets/svgs/services1.svg";
import Cat from "../assets/svgs/services2.svg";
import House from "../assets/svgs/services3.svg";
import Paw from "../assets/svgs/services4.svg";
import "../styles/sections/servicesSection.css";
import Section from "../components/Section";


const ServicesSection = () => {
  return (
    <Section
      id="services"
      content={
        <div className="services-content">
          <div className="leftS">
            <h2>Our Services</h2>
            <p className="p1">National Brand With a Local Feel.</p>
            <p className="p1">Experience the Fetch! Difference</p>
            <p className="location-text">
              Enter Your Location and Fetch Our Services
            </p>
            <div className="zip-code-input">
              <input type="number" placeholder="Zip Code" />
              <button className="btn">→</button>
            </div>
          </div>
          <div className="rightS">
            <div className="service-icons">
              <div className="service-icon">
                <img src={DogIco} alt="Dog Walking" />
                <p>Dog Walking</p>
              </div>
              <div className="service-icon">
                <img src={Cat} alt="Pet Sitting" />
                <p>Pet Sitting</p>
              </div>
              <div className="service-icon">
                <img src={House} alt="Overnight Care" />
                <p>Overnight Care</p>
              </div>
              <div className="service-icon">
                <img src={Paw} alt="Other Services" />
                <p>Other Services</p>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default ServicesSection;
