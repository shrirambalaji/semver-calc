import React, { Component } from "react";
import { Container, Columns, Column, Input } from "bloomer";
import "./Search.css";

class Search extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Container className="margin-top-100">
				<Columns isCentered>
					<Column isSize="1/3">
						<label htmlFor="package-name" id="packageNameLabel">
							Search for a Package
						</label>
						<Input medium className="input" id="packageName" />
					</Column>
				</Columns>
			</Container>
		);
	}
}

module.exports = Search;
