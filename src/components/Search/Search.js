import React, { Component } from "react";
import { Container, Columns, Column, Field, FieldBody, Control, Button } from "bloomer";
import Select from "react-select";
import "react-select/dist/react-select.css";
import "./Search.css";

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: null
		};
	}

	getPackageNames(input) {
		let packages = [];
		if (!input) {
			return Promise.resolve({ options: [] });
		}

		return fetch(`https://api.npms.io/v2/search?q=${input}`)
			.then(response => response.json())
			.then(json => {
				json.results.map(item => {
					packages.push(item.package);
					return packages;
				}, {});
				return { options: packages };
			});
	}

	onInputKeyDown = event => {
		switch (event.keyCode) {
			case 13:
				let packageName = this.state.value.name;
				if (!packageName) packageName = "";
				this.props.search(name);
				this.props.startLoading(true);
				event.preventDefault();
				break;

			default:
				break;
		}
	};

	onChange = value => {
		this.setState({
			value: value
		});
		this.props.clearVersions();
	};

	handleClick = e => {
		e.preventDefault();
		let packageName = this.state.value.name;
		if (!packageName) packageName = "";
		this.props.search(packageName);
		this.props.startLoading(true);
	};

	render() {
		const AsyncSearch = Select.Async;
		return (
			<Container id="searchContainer">
				<Columns isCentered>
					<Column isSize="1/2">
						<Field isHorizontal>
							<FieldBody>
								<Field isGrouped>
									<Control isExpanded>
										<AsyncSearch
											name="package-name"
											id="packageName"
											value={this.state.value}
											onChange={this.onChange}
											placeholder="Search for an npm package"
											loadOptions={this.getPackageNames}
											onInputKeyDown={this.onInputKeyDown}
											labelKey="name"
										/>
									</Control>
								</Field>
								<Button
									id="submitButton"
									isColor="success"
									className={this.props.loadingClass}
									onClick={this.handleClick}
								>
									Submit
								</Button>
							</FieldBody>
						</Field>
					</Column>
				</Columns>
			</Container>
		);
	}
}

module.exports = Search;
