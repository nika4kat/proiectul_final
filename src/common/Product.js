import { Button, Col } from "reactstrap";

function Product({ product }) {
	return (
		<Col xs='12' md='3'>
			<img
				src={`https://picsum.photos/seed/${product.id}/500`}
				style={{ height: "380px", objectFit: "cover", width: "100%" }}
			/>
			<h2>{product.title}</h2>
			<p>${product.price} </p>
			<Button color='light'>Add to wishlist</Button>
		</Col>
	);
}

export default Product;
