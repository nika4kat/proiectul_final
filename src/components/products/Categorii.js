import React, { Component } from "react";
import DouzeciDeProduse from "./DouzeciDeProduse";
import "./Categorii.css";

export class Categorii extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [
				{
					key: "electronics",
					name: "Electronics",
				},
				{
					key: "jewelery",
					name: "Jewelery",
				},
				{
					key: "men's clothing",
					name: "Men's clothing",
				},
				{
					key: "women's clothing",
					name: "Women's clothing",
				},
			],
		};
	}
	render() {
		return (
			<div className='products_main'>
				<div className='categories'>
					{this.state.categories.map((e) => (
						<div key={e.key}> {e.name}</div>
					))}
				</div>
				<DouzeciDeProduse />
			</div>
		);
	}
}
export default Categorii;
