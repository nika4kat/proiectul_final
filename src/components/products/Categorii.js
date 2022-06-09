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
			selectedCategory: "",
		};
	}
	render() {
		return (
			<div className='products_main'>
				<div className='categories'>
					<h3>Categorii:</h3>
					{this.state.categories.map((e) => (
						<div
							onClick={() => {
								this.setState({ selectedCategory: e.name });
							}}
							key={e.key}>
							{" "}
							{e.name}
						</div>
					))}
				</div>
				<DouzeciDeProduse selected={this.state.selectedCategory} />
			</div>
		);
	}
}
export default Categorii;
