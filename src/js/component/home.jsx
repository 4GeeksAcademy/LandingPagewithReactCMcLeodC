import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./cards";
import Footer from "./footer";
// import styles from "../../styles";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm">
						<Card />
					</div>
					<div className="col-sm">
						<Card />
					</div>
					<div className="col-sm">
						<Card />
					</div>
					<div className="col-sm">
						<Card />
					</div>
				</div>
			</div>
			<Footer />
		</>

	);
};

export default Home;
