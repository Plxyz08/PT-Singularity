import Calendar from "../assets/svgs/hiw1.svg";
import Girl from "../assets/svgs/hiw2.svg";
import DogHiw from "../assets/svgs/hiw3.svg";
import Curva1 from "../assets/svgs/curva1.svg";
import Curva2 from "../assets/svgs/curva2.svg";
import "../styles/sections/howItWorksSection.css";
import Section from "../components/Section";

const HowItWorksSection = () => {
  return (
    <Section
      id="how-it-works"
      content={
        <div className="hiw-content">
          <div className="left1">
            <div className="hiw-section">
              <div className="hiw-card card-1">
                <div className="hiw-icon">
                  <img src={Calendar} alt="Reserve" />
                  <p>Reserve</p>
                </div>
              </div>
              <div className="hiw-card card-2">
                <div className="hiw-icon">
                  <img src={Girl} alt="Match" />
                  <p>Match</p>
                </div>
              </div>
              <div className="hiw-card card-3">
                <div className="hiw-icon">
                  <img src={DogHiw} alt="Relax" />
                  <p>Relax</p>
                </div>
              </div>
              <img src={Curva1} alt="Curva 1" className="curva-1" />
              <img src={Curva2} alt="Curva 2" className="curva-2" />
            </div>
          </div>
          <div className="right1">
            <h2>How it Works</h2>
            <p className="p1">Because finding a good pet sitter shouldn’t be</p>
            <p className="p1">a hassle. With Fetch! It’s as easy as…</p>
            <p className="location-text">
              Enter Your Location and Fetch Our Services
            </p>
            <div className="zip-code-input">
              <input type="number" placeholder="Zip Code" />
              <button className="btn">→</button>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default HowItWorksSection;
