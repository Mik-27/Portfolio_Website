import "./footer.css";

export default function Footer() {
	return (
		<footer>
			<div className="footer-container">
				<div className="footer-header">
					<h2>Mihir Thakur</h2>
				</div>
				<div className="footer-links">
					<a className="github-link" href="https://github.com/Mik-27">
						<i className="fab fa-github"></i>
					</a>
					<a
						className="linkedin-link"
						href="https://www.linkedin.com/in/mihir-thakur-116aa2208/"
					>
						<i className="fab fa-linkedin-in"></i>
					</a>
					<a className="kaggle-link" href="https://www.kaggle.com/mihir27">
						<i className="fab fa-kaggle"></i>
					</a>
				</div>
			</div>
		</footer>
	);
}
