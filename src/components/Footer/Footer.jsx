import "./Footer.css";
import user_icon from "../../assets/user_icon.svg";
import logoj from "../../assets/logoj.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logoj} alt="Footer Logo" />
          <p>
            I am a frontend developer from Brazil, excited to learn and showcase
            my skills
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <p className="footer-copy">&copy; 2024 by Jordan Vinicius</p>
    </footer>
  );
}

export default Footer;
