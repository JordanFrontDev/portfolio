import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.png";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile Image" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I aim to learn from developers who are more experienced than I am.
            </p>
            I am keen on staying up-to-date with market trends and quickly
            adapting to new technologies, and I have a knack for autonomous
            learning.<p></p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Nextjs</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>LEARNING</h1>
          <p>CONTINUOUS LEARNING</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>FLUENCY</h1>
          <p>FLUENCY IN ENGLISH</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>RESILIENCE</h1>
          <p>PROBLEM SOLVING SKILLS</p>
        </div>
      </div>
    </section>
  );
}

export default About;
