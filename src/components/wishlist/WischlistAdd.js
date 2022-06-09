import { useState, useEffect } from "react";
import { Container, Row, Button } from "reactstrap";
import "./Wishlist.css";

function WishlistAdd({ product }) {
	const [products, setProducts] = useState([]);

	const onDelete = (id) => {
		const filterArray = products.filter((product) => {
			return product.id !== id;
		});
		setProducts(filterArray);
		localStorage.setItem("productList", JSON.stringify(filterArray));
	};

	useEffect(() => {
		const productStorage = localStorage.getItem("productList");
		if (productStorage) {
			const productArray = JSON.parse(productStorage);
			setProducts(productArray);
		}
	}, []);
	return (
		<>
			<Container>
				<h1 className='text'>Wishlist</h1>

				<Row>
					{products.map((product) => {
						return (
							<table class='table '>
								<tr>
									<tr>
										<th scope='col'></th>
										<th scope='col'>Titlu produsului</th>
										<th scope='col'>Preț</th>
										<th scope='col'></th>
									</tr>
									<td>
										<img
											src={`https://picsum.photos/seed/${product.id}/500`}
											style={{
												height: "100px",
												objectFit: "cover",
												width: "100%",
											}}
										/>
									</td>
									<td>
										<h4>{product.title}</h4>
									</td>
									<td>
										<p>${product.price}</p>
									</td>
									<td>
										<Button
											className='button_table'
											onClick={() => {
												onDelete(product.id);
											}}>
											Delete
										</Button>
									</td>
								</tr>
							</table>
						);
					})}
				</Row>
			</Container>
		</>
	);
}

export default WishlistAdd;
