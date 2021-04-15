// import skillsData from "../../skills.json";
import SkillCard from "../../components/skill-card/skillCard";
import "./skills.css";

export default function Skills() {
	return (
		<div className="skills-main">
			<div className="skills-heading">
				<h1>Skills</h1>
			</div>
			<div className="skills-container">
				<SkillCard
					logos={["fab fa-react"]}
					title="React-JS"
					description="Lorem ipsum"
				/>
			</div>
		</div>
	);
}
