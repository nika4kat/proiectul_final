import "./Navbar.css";
import { Link } from "react-router-dom";
import img1 from "../common/logo.png";

function Navbar() {
	return (
		<div className='container_navbar'>
			<div>
				<Link className='link' to='/'>
					Home
				</Link>
				<Link className='link' to='/produse'>
					Produse
				</Link>
			</div>
			<img className='styled_logo' src={img1} />
			<div>
				<Link className='link' to='/wishlist'>
					Wishlist
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
