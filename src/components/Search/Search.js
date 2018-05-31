import React, { Component } from "react";
import { Container, Columns, Column, Input, Button } from "bloomer";
import "./Search.css";

class Search extends Component {
	state = {
		packageName: ""
	};

	handleChange = e => {
		this.setState({ packageName: e.target.value });
	};

	handleClick = e => {
		e.preventDefault();
	};

	render() {
		const { packageName } = this.state;
		return (
			<Container className="margin-top-100">
				<Columns isCentered>
					<Column isSize="1/3">
						<label htmlFor="package-name" id="packageNameLabel">
							Search for a Package
						</label>
						<Input
							medium="true"
							className="input"
							id="packageName"
							onChange={this.handleChange}
							value={packageName}
						/>
					</Column>
					<Column isSize="1/3">
						<Button isOutlined isColor="info" onClick={this.handleClick}>
							Search
						</Button>
					</Column>
				</Columns>
			</Container>
		);
	}
}

module.exports = Search;
