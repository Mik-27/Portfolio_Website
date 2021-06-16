import "./projectCard.css";
// import netflixImg from "../../assets/projects/netflix.jpg";

export default function ProjectCard({ title, image, link }) {
	return (
		<div className="project-card">
			<div className="project-heading">
				<h1>{title}</h1>
				<a
					className="github-button"
					href={link}
					rel="noopener noreferrer"
					target="_blank"
				>
					View on Github
				</a>
			</div>
			<div className="project-img">
				<img src={image} alt={title} />
			</div>
		</div>
	);
}
