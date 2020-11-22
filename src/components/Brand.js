// Libraries
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

// Style
import "../styles/brand.css";

const Brand = () => {
	return (
		<div className="brand-container">
			<h1>Firewatch</h1>
			<span>
				<a
					href="https://iminyourpie.github.io/Portfolio/"
					target="_blank"
					rel="noreferrer"
				>
					Miguel Melo
				</a>{" "}
				- Powered by NASA
			</span>
			<div className="icon-container">
				<a
					className="icon-link"
					href="https://github.com/ImInYourPie"
					target="_blank"
					rel="noreferrer"
				>
					<AiFillGithub id="github" size="24px" color="#888" />
				</a>
				<a
					className="icon-link"
					href="https://www.linkedin.com/in/dmiguelmelo/"
					target="_blank"
					rel="noreferrer"
				>
					<AiFillLinkedin id="linkedin" size="24px" color="#888" />
				</a>
				<a
					className="icon-link"
					href="https://www.facebook.com/mutts30/"
					target="_blank"
					rel="noreferrer"
				>
					<AiFillFacebook id="facebook" size="24px" color="#888" />
				</a>
			</div>
		</div>
	);
};

export default Brand;
