import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume_pdf from "../../assets/JordanViniciusResume.pdf";

function Hero() {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="Profile Img" />
      <h1>
        <span>I&apos;m Jordan Vinicius</span> and I&apos;m a front-end developer
      </h1>
      <p>
        Passionate Software Developer based in Brazil | React.js Enthusiast |
        Committed to Continuous Learning
      </p>
      <div className="hero-action">
        <AnchorLink className="anchor-link" href="#contact">
          <div className="hero-connect">Connect with me</div>
        </AnchorLink>

        <a href={resume_pdf} className="hero-resume-a" download>
          <div className="hero-resume">My resume</div>
        </a>
      </div>
    </div>
  );
}

export default Hero;
