import petLogo from "../assets/svgs/pet.svg";
import { useState } from "react";
import "../styles/sections/feedbackSection.css";
import Section from "../components/Section";


const FeedbackSection = () => {
  const feedbacks = [
    {
      id: 1,
      name: "Jane Doe",
      description: "Amazing service! My pet loved it!",
      image: petLogo,
    },
    {
      id: 2,
      name: "John Smith",
      description: "Highly recommend Fetch! Pet Care.",
      image: petLogo,
    },
    {
      id: 3,
      name: "Emily Johnson",
      description: "Super convenient and reliable!",
      image: petLogo,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  const handleSlide = (direction) => {
    if (direction === "left") {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
      );
    } else {
      setActiveIndex((prevIndex) =>
        prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <Section
      id="feedback"
      content={
        <div className="feedback-section">
          <h2 className="title">Here´s what pet owners have to</h2>
          <h2 className="title">say about Fetch! Pet Care...</h2>
          <div className="content">
            <button
              className="feedback-arrow-left"
              onClick={() => handleSlide("left")}
            >
              ←
            </button>
            <div className="feedback-cards">
              {feedbacks.map((feedback, index) => {
                const position =
                  (index - activeIndex + feedbacks.length) % feedbacks.length;

                let className = "feedback-card";
                if (position === 0) className += " active";
                else if (position === 1) className += " right";
                else if (position === feedbacks.length - 1)
                  className += " left";

                return (
                  <div key={feedback.id} className={className}>
                    <img
                      src={feedback.image}
                      alt={feedback.name}
                      className="feedback-avatar"
                    />
                    <h3 className="feedback-name">{feedback.name}</h3>
                    <p className="feedback-description">
                      {feedback.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <button
              className="feedback-arrow-right"
              onClick={() => handleSlide("right")}
            >
              →
            </button>
          </div>
        </div>
      }
    />
  );
};

export default FeedbackSection;
