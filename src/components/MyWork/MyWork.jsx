import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";

function MyWork() {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, i) => {
          return (
            <a href={work.w_link} target="blanc" key={work.w_name + i}>
              <img src={work.w_img} alt="Project" />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default MyWork;
