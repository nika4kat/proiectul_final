import React from "react";
import { Link } from "react-router-dom";
import "./Categorii.css";

function Categorii() {
	return (
		<div className='container_categorii' xs='12' md='6'>
			<div className='main_block'>
				<img
					className='main_img'
					src='https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
				/>
				<h3>Mobila</h3>
				<Link className='link' to='/produse'>
					<button className='main_button'> Descopera acum </button>
				</Link>
			</div>
			<div className='main_block'>
				<img
					className='main_img'
					src='https://images.pexels.com/photos/707582/pexels-photo-707582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
				/>
				<h3>Fashion</h3>
				<Link className='link' to='/produse'>
					<button className='main_button'>Descopera acum</button>
				</Link>
			</div>
			<div className='main_block'>
				<img
					className='main_img'
					src='https://images.pexels.com/photos/305821/pexels-photo-305821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
				/>
				<h3>Accesorii</h3>
				<Link className='link' to='/produse'>
					<button className='main_button'>Descopera acum</button>
				</Link>
			</div>
		</div>
	);
}
export default Categorii;
