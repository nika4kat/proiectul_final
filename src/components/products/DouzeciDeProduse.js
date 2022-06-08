import Product from "../../common/Product";
import { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import Search from "./Search";
import "./DouzeciDeProduse.css";

function DouzeciDeProduse({ selected }) {
	const [products, setProducts] = useState(null);
	const [searchValue, setSearchValue] = useState(null);

	const getProducts = async () => {
		const responseData = await fetch("https://fakestoreapi.com/products");
		const apiProducts = await responseData.json();
		console.log(apiProducts);
		if (!apiProducts.length) {
			setProducts([apiProducts]);
		} else {
			setProducts(apiProducts);
		}
	};

	const onSearch = (search) => {
		setSearchValue(search);
	};

	const filterBySearch = (arrayProduct, searchValue) => {
		if (searchValue === null) return arrayProduct;

		var tempPproducts = [];
		for (let index = 0; index < arrayProduct.length; index++) {
			if (arrayProduct[index].title.includes(searchValue)) {
				tempPproducts.push(arrayProduct[index]);
			}
		}

		return tempPproducts;
	};
	const categoryFilter = async () => {
		const responseData = await fetch("https://fakestoreapi.com/products");
		const apiProducts = await responseData.json();

		const tempPproducts = [];

		for (let index = 0; index < apiProducts.length; index++) {
			if (apiProducts[index].category == selected.toLowerCase()) {
				tempPproducts.push(apiProducts[index]);
			}
		}

		setProducts(tempPproducts);
	};
	useEffect(() => {
		console.log(selected);
		if (selected !== "") {
			categoryFilter();
		}
	}, [selected]);

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<Container className='container'>
			<Search handleSearch={onSearch} />
			<Row className='product_container'>
				{products ? (
					<>
						{filterBySearch(products, searchValue).map((product, index) => {
							return <Product key={index} product={product} />;
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
