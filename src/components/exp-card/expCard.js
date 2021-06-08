import "./expCard.css";

export default function ExpCard({ image, contents }) {
	return (
		<div className="exp-card">
			<div className="exp-heading">
				<div className="image">
					<img src={image} alt="Cannot Load." />
				</div>
				<div className="card-contents">
					<p className="duration"></p>
					<h2 className="designation">asfas</h2>
					<ul className="details">
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</div>
		</div>
	);
}
