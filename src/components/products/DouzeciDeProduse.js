import Product from "../../common/Product";
import { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import Search from "./Search";
import "./DouzeciDeProduse.css";

function DouzeciDeProduse() {
	const [products, setProducts] = useState(null);
	const [searchValue, setSearchValue] = useState(null);

	const getProducts = async () => {
		const responseData = await fetch("https://fakestoreapi.com/products");
		const apiProducts = await responseData.json();
		console.log(apiProducts);
		setProducts(apiProducts);
	};

	const onSearch = (search) => {
		setSearchValue(search);
	};

	const filterBySearch = (arrayProduct, searchValue) => {
		if (searchValue === null) return arrayProduct;
		return arrayProduct.filter((products) => {
			return products.name.includes(searchValue);
		});
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<Container className='container'>
			<Search handleSearch={onSearch} />
			<Row className='product_container'>
				{products ? (
					<>
						{products.map((products, index) => {
							return (
								<Product product={filterBySearch(products, searchValue)} />
							);
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
