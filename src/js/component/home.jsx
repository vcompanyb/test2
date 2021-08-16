import React from "react";

import RigoImage from "./RigoImage.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<RigoImage />
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
