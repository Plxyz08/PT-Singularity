import Card from "../assets/svgs/fondo-join.svg";
import ImageCard from "../assets/svgs/dog2.svg";
import "../styles/sections/joinUsSection.css";
import Section from "../components/Section";

const JoinUsSection = () => {
  return (
    <Section
      id="join-us"
      content={
        <div className="join-us-section">
          <div className="card-container">
            <div className="card-background">
              <img src={Card} alt="Card Background" className="card-image" />
            </div>
            <div className="card-content">
              <div className="card-left">
                <img
                  src={ImageCard}
                  alt="Dog Illustration"
                  className="card-dog-image"
                />
              </div>
              <div className="card-right">
                <h1 className="join-title">Make Fetch! Happen</h1>
                <p className="join-description">
                  If you love pets and want exciting work, apply to be a Fetch!
                  Pet Care Provider! We train every team member and provide
                  ongoing support to help you get the most from your role.
                </p>
                <button className="join-button">Join Now</button>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default JoinUsSection;
