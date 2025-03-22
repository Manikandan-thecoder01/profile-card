import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "blue",
  },
  {
    skill: "Javascript",
    level: "advanced",
    color: "red",
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "yellow",
  },
  {
    skill: "Git and Github",
    level: "advanced",
    color: "orange",
  },
  {
    skill: "React",
    level: "advanced",
    color: "green",
  },
  {
    skill: "Flutter",
    level: "beginner",
    color: "purple",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="mani.jpg" alt="photo"></img>;
}
function Intro() {
  return (
    <div className="data">
      <h1>Manikandan</h1>
      <p>
        Hi, I'm a second-year engineering student with a passion for technology
        and innovation. I'm eager to learn, explore, and build solutions that
        make a difference!{" "}
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((s) => (
        <Skills skill={s.skill} level={s.level} color={s.color} />
      ))}
    </div>
  );
}
function Skills(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>
        {props.level === "advanced"
          ? "💪"
          : props.level === "intermediate"
          ? "👌"
          : "🍼"}
      </span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
