import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
	return (
		<>
			<div className='footer_container mx-auto'>
				<div className='util_links'>
					<Link className='links' to='/'>
						Home -
					</Link>

					<Link className='links' to='/produse'>
						Produse
					</Link>
					<p className='company_name'>Outstock© 2021</p>
				</div>
				<div className='footer_right'>
					<img
						className='image'
						src='https://cdn-icons.flaticon.com/png/512/508/premium/508174.png?token=exp=1653250665~hmac=f7b28141f579f8549b06431163c7ddd8'
					/>
					<img
						className='image'
						src='https://cdn-icons-png.flaticon.com/512/60/60580.png'
					/>
					<img
						className='image'
						src='https://cdn-icons-png.flaticon.com/512/61/61109.png'
					/>
					<img
						className='image'
						src='https://cdn-icons.flaticon.com/png/512/3291/premium/3291695.png?token=exp=1653250765~hmac=80d90c040af6e3b802a9fbf274cfe076'
					/>
				</div>
			</div>
		</>
	);
}

export default Footer;
