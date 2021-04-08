import skillsData from "../../skills.json";
import "./skills.css";

export default function Skills() {
	return (
		<div className="skills">
			<div className="skills-heading">
				<h1>Skills</h1>
			</div>
			<div className="skills-container">
				{skillsData.map((skill) => {
					return (
						<div className="skill">
							{console.log(skill)}
							<div className="skill-title">
								<h2>{skill.title}</h2>
							</div>
							<div className="skill-logo">
								<img
									src={skill["image-url"]}
									alt={skill.title}
									width="80"
									height="60"
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
