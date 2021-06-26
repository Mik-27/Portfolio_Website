// import { useState, useLayoutEffect, useRef } from "react";
import Skills from "../container/skillsContainer/skills";
import Projects from "../container/projectsContainer/projects";
import Experience from "../container/experienceContainer/exp";
import "./home.css";
import bgImg from "../assets/laptopbg.jpg";

export default function Home() {
	// const [slide, setSlide] = useState(false);

	// const slideRef = useRef(null);

	// useLayoutEffect(() => {
	// 	const topPos = (element) => element.getBoundingRect().top;
	// 	const divPos = topPos(slideRef.current);
	// 	console.log(divPos);
	// 	// console.log();

	// 	const onScroll = () => {
	// 		const scrollPos = window.scrollY + window.innerHeight;
	// 		if (divPos < scrollPos) {
	// 			console.log(divPos, scrollPos);
	// 			setSlide(() => false);
	// 		}
	// 	};

	// 	window.addEventListener("scroll", onScroll, { passive: true });
	// 	return () =>
	// 		window.removeEventListener("scroll", onScroll, { passive: true });
	// }, []);

	// const slideIn = () => {
	// 	if (window.scrollY >= 450) {
	// 		setSlide(true);
	// 	}
	// };

	// useEffect(() => {
	// 	window.addEventListener("scroll", slideIn, { passive: true });
	// 	return () => {
	// 		window.removeEventListener("scroll", slideIn, { passive: true });
	// 	};
	// }, []);

	return (
		<div className="home-main">
			<div className="home-bg-container">
				<div className="home-bg">
					<img className="bg-image" src={bgImg} alt="" />
					<div className="main-text">
						<h1>
							<span className="text-first" style={{ color: "#3aafa9" }}>
								Hi, I'm Mihir Thakur.
							</span>
							<br></br>
							<span className="text-second">
								I'm a fresher interested in Web Development and Machine
								Learning.
							</span>
						</h1>
					</div>
				</div>
			</div>
			<section id="about" className="home-container">
				<div className="info">
					<div
						// className={
						// 	slide ? "image-container" : "image-container slide-right"
						// }
						className="image-container"
						// animate={slide}
						// ref={slideRef}
					>
						<div className="image"></div>
						{/* <p className="photo-credits">
							Photo by{" "}
							<a href="https://unsplash.com/@surface?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
								Surface
							</a>{" "}
							on{" "}
							<a href="https://unsplash.com/s/photos/computer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
								Unsplash
							</a>
						</p> */}
					</div>
					<div
						// className={slide ? "intro" : "slide-left intro"}
						className="intro"
					>
						<h1>About Me</h1>
						<p>
							I'm currently pursuing my Computer Engineering Degree from
							University of Mumbai. I expect to graduate in Spring, 2022. My
							interests are Web Development and Machine Learning. I love to
							create performant projects. <br />
							<br />I had developed a web application - YelpCamp based on an
							online course which helps user for finding and reviewing camping
							areas. I am actually not quite experienced in Machine Learning but
							intend to expand my knowledge by developing ML applications and
							gain expertise.
						</p>
					</div>
				</div>
			</section>
			<section id="skills" className="skill-container">
				<Skills />
				<div className="skill-img-credits">
					<p>
						Photo by{" "}
						<a href="https://unsplash.com/@florianolv?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
							Florian Olivo
						</a>{" "}
						on{" "}
						<a href="https://unsplash.com/s/photos/coding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
							Unsplash
						</a>
					</p>
				</div>
			</section>
			<section id="projects" className="projects-container">
				<Projects />
			</section>
			<section id="exp" className="experience-container">
				<Experience />
			</section>
		</div>
	);
}
