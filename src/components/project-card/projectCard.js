import "./projectCard.css";
// import netflixImg from "../../assets/projects/netflix.jpg";

export default function ProjectCard({ title, image }) {
	return (
		<div className="project-card">
			<div className="project-heading">
				<h1>{title}</h1>
				<button className="github-button">View on Github</button>
			</div>
			<div className="project-img">
				<img src={image} alt={title} />
			</div>
		</div>
	);
}
