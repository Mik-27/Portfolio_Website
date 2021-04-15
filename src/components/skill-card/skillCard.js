export default function SkillCard({ logos, title, description }) {
	return (
		<div className="card">
			{logos ? (
				<div className="card-logos">
					{console.log(logos)}
					{logos.map((logo) => {
						return <i key={logo} className={logo + " logo"}></i>;
					})}
				</div>
			) : null}
			<div className="card-title">{title}</div>
			<div className="card-description">{description}</div>
		</div>
	);
}
