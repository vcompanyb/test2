import React from "react";

import HelloComponent from "./HelloComponent.jsx";
import RigoImage from "./RigoImage.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<HelloComponent />
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
