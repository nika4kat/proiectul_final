import Product from "../../common/Product";
import { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";

function DouzeciDeProduse() {
	const [products, setProducts] = useState(null);

	const getProducts = async () => {
		const responseData = await fetch("https://fakestoreapi.com/products");
		const apiProducts = await responseData.json();
		console.log(apiProducts);
		setProducts(apiProducts);
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<Container>
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
export default DouzeciDeProduse;
