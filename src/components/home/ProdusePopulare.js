import Product from "../../common/Product";
import { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import "./ProdusePopulare.css";

function ProdusePopulare() {
	const [products, setProducts] = useState(null);

	const getProducts = async () => {
		const responseData = await fetch(
			"https://fakestoreapi.com/products?limit=8"
		);
		const apiProducts = await responseData.json();
		console.log(apiProducts);
		setProducts(apiProducts);
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<Container className='product_display'>
			<h2>Produse populare</h2>
			<p>
				Adaugă estetica interioară cu gama noastră de decor pentru casă și
				altele.
			</p>

			<Row>
				{products ? (
					<>
						{products.map((products, index) => {
							return <Product product={products} />;
						})}
					</>
				) : (
					<div>Loading...</div>
				)}
			</Row>
		</Container>
	);
}
export default ProdusePopulare;
