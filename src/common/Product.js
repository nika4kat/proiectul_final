import { Button, Col } from "reactstrap";

function Product({ product }) {
	const addToWishlist = (product) => {
		const productStorage = localStorage.getItem("productList");

		if (productStorage === null) {
			const productList = [];
			productList.push(product);
			localStorage.setItem("productList", JSON.stringify(productList));
		} else {
			const storageArray = JSON.parse(productStorage);
			storageArray.push(product);
			localStorage.setItem("productList", JSON.stringify(storageArray));
		}
	};
	return (
		<Col xs='12' md='3'>
			<img
				src={`https://picsum.photos/seed/${product.id}/500`}
				style={{ height: "380px", objectFit: "cover", width: "100%" }}
			/>
			<h2>{product.title}</h2>
			<p>${product.price} </p>
			<Button
				className='button'
				color='light'
				onClick={() => {
					addToWishlist(product);
				}}>
				Add to wishlist
			</Button>
		</Col>
	);
}

export default Product;
