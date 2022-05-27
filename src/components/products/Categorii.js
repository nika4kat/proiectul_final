import React, { Component } from "react";
import DouzeciDeProduse from "./DouzeciDeProduse";
import "./Categorii.css";
import Search from "./Search";

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
			<div>
				<div className='categories'>
					{this.state.categories.map((e) => (
						<div key={e.key}> {e.name}</div>
					))}
				</div>
				<Search />
				<DouzeciDeProduse />
			</div>
		);
	}
}
export default Categorii;
