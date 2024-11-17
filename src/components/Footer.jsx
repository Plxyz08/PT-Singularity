import "./../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li>Locations</li>
            <li>Franchise With Us</li>
            <li>Partners</li>
            <li>About Us</li>
            <li>Make Fetch Happen!</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>Reviews</li>
            <li>Pet Resource Center</li>
            <li>Media Fact Sheet</li>
            <li>Blog</li>
            <li>News</li>
          </ul>
        </div>
        <div className="footer-section">
          <h5 className="none">Vacio</h5>
          <ul>
            <li>Gift Cards</li>
            <li>Services</li>
            <li>Franchisee Login</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>NewsLetter</h4>
          <p>Sign up to receive the Fetch!</p>
          <p>Family Newsletter</p>
          <div className="email-input">
            <input type="email" placeholder="Email Address" />
            <button className="btn">→</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
