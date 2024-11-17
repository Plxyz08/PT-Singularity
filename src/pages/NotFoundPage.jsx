import { useNavigate } from "react-router-dom";
import "../styles/notFoundPage.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found-background">
        <div className="animated-circle"></div>
        <div className="animated-circle"></div>
        <div className="animated-circle"></div>
      </div>
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-description">
          Oops! The page you are looking for doesn´t exist.
        </p>
        <button
          className="not-found-button"
          onClick={() => navigate("/")}
        >
          Go Back to Login
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
