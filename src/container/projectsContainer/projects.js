import ProjectCard from "../../components/project-card/projectCard";
import "./projects.css";
import netflixImg from "../../assets/projects/netflix.jpg";
import yelpcampImg from "../../assets/projects/yelpcamp.jpg";
import pdpImg from "../../assets/projects/PDP.jpg";

export default function Projects() {
	return (
		<div className="project-main">
			<div className="project-top">
				<h1>Projects</h1>
			</div>
			<div className="project-container">
				<ProjectCard image={netflixImg} title="Netflix Clone" />
				<ProjectCard image={yelpcampImg} title="YelpCamp" />
				<ProjectCard image={pdpImg} title="Plant Disease Prediction" />
				{/* <ProjectCard /> */}
			</div>
		</div>
	);
}
