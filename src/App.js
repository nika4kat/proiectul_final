import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from "react-router-dom";
import Wishlist from "./views/Wishlist";
import Produse from "./views/Produse";
import Home from "./views/Home";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<div style={{ marginTop: "100px" }}>
					<Switch>
						<Route path='/' element={<Home />}></Route>
						<Route path='/produse/:productId' element={<Produse />}></Route>
						<Route path='/wishlist' element={<Wishlist />}></Route>
					</Switch>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
