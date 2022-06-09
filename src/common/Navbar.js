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
			<Link className='link' to='/'>
				<img className='styled_logo' src={img1} />
			</Link>

			<div>
				<Link className='link' to='/wishlist'>
					Wishlist
					<img
						className='wish'
						src='https://cdn-icons.flaticon.com/png/512/4991/premium/4991381.png?token=exp=1654763231~hmac=e9dba8bf45d1108d7ec344b2faaa4719'
					/>
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
