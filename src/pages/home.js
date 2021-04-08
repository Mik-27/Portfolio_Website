import { useState, useEffect } from "react";
import Skills from "../container/skillsContainer/skills";
import "./home.css";

export default function Home() {
	const [slide, setSlide] = useState(false);

	const slideIn = () => {
		if (window.scrollY >= 600) {
			setSlide(true);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", slideIn);
		return () => {
			window.removeEventListener("scroll", slideIn);
		};
	}, []);

	return (
		<div className="home-main">
			<div className="home-bg"></div>
			<section className="home-container">
				<div className="info">
					<div
						className={
							slide ? "image-container" : "image-container slide-right"
						}
					>
						<div className="image"></div>
						<p className="photo-credits">
							Photo by{" "}
							<a href="https://unsplash.com/@surface?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
								Surface
							</a>{" "}
							on{" "}
							<a href="https://unsplash.com/s/photos/computer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
								Unsplash
							</a>
						</p>
					</div>
					<div className={slide ? "intro" : "slide-left intro"}>
						<h1>About Me</h1>
						<p>
							I'm currently pursuing my Computer Engineering Degree from
							University of Mumbai. My interests are in Web Development and
							Machine Learning and I love to create performant projects. <br />
							<br />I had developed a web application - YelpCamp based on an
							online course which helps user for finding and reviewing camping
							areas. I am actually not quite experienced in Machine Learning but
							intend to develop ML applications and gain expertise.
						</p>
					</div>
				</div>
				<Skills />
			</section>
		</div>
	);
}
