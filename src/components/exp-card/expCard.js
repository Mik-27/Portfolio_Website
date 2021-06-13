import "./expCard.css";
import appDev from "../../assets/exp/AppDev.png";

export default function ExpCard() {
	return (
		<div className="exp-card">
			<div className="exp-image">
				<img src={appDev} alt="Cannot Load." />
			</div>
			<div className="card-contents">
				<p className="duration">Sept 2020 - Nov 2020</p>
				<h2 className="designation">App Development Intern</h2>
				<ul className="details">
					<li>
						<a href="https://innovatiivecreators.in/">Innovatiive Creators</a>
					</li>
					<li>Develop mobile apps for business</li>
					<li>Flutter, Firebase</li>
				</ul>
			</div>
		</div>
	);
}
