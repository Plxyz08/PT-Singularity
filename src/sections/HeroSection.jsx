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
            <h1>Your Pet, Our Priority!</h1>
            <p>
              Providing loving and reliable pet care services to ensure your
              furry friends are always happy, healthy, and loved.
            </p>
            <div className="buttons">
              <button className="submit-button">Book a Service</button>
              <p className="call-text">Need help? Call us at 866.338</p>
            </div>
          </div>
          <div className="dog-image-container">
            <img src={Dog} alt="Joyful Dog" className="dog-image" />
          </div>
        </section>
      }
    />
  );
};

export default HeroSection;
