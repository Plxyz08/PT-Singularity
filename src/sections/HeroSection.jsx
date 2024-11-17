import Dog from "../assets/svgs/dog1.svg";
import "../styles/sections/heroSection.css";
import Section from "../components/Section";

const HeroSection = () => {
  return (
    <Section
      id="home"
      content={
        <section id="home" className="home-section">
          <div className="home-content">
            <h1>We Get Pet Care!</h1>
            <p>
              For over 17 years, Fetch! Pet Care has been a trusted partner in
              keeping pets healthy and happy!
            </p>
            <div className="buttons">
              <button className="submit-button">Schedule Service</button>
              <p className="call-text">Or Call 866.338.2463</p>
            </div>
          </div>
          <div className="dog-image-container">
            <img src={Dog} alt="Happy Dog" className="dog-image" />
          </div>
        </section>
      }
    />
  );
};

export default HeroSection;