import React from "react";
import CarouselContainer from "../components/home/CarouselContainer";
import Categorii from "../components/home/Categorii";
import ProdusePopulare from "../components/home/ProdusePopulare";

function Home() {
	return (
		<>
			<CarouselContainer />
			<Categorii />
			<ProdusePopulare />
		</>
	);
}

export default Home;
