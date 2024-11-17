import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../services/authService";
import petLogo from "../assets/svgs/pet.svg";
import "../styles/login.css";
import fondo from "../assets/svgs/login.svg";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const isEmailValid = emailRegex.test(email.trim());
  const isPasswordValid = password.length >= 4;
  const isFormValid = isEmailValid && isPasswordValid;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { token } = await login(email, password);
      localStorage.setItem("token", token);

      toast.success("Inicio de sesión exitoso. Redirigiendo...", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });

      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch {
      toast.error("Error en el inicio de sesión. Verifica tus credenciales.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={fondo} alt="Fondo" className="login-background" />
        <div className="logo-container1">
          <img src={petLogo} alt="Logo1" className="logo1" />
        </div>
      </div>
      <div className="login-right">
        <div className="titulo">
          <div className="vertical-bar"></div>
          <h1 className="welcome-title">Bienvenido</h1>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="EMAIL"
            className={`input-field ${
              !isEmailValid && email ? "input-error" : ""
            }`}
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="CONTRASEÑA"
            className={`input-field ${
              !isPasswordValid && password ? "input-error" : ""
            }`}
            required
          />
          <p className="forgot-password">¿Olvidaste tu contraseña?</p>
          <button
            type="submit"
            disabled={!isFormValid}
            className={`submit-button ${!isFormValid ? "button-disabled" : ""}`}
          >
            {isLoading ? "Cargando..." : "INICIAR SESIÓN"}
          </button>
        </form>
        <p className="register-link">
          Aún no tengo cuenta <span className="register-span">REGISTRARSE</span>
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default LoginPage;
