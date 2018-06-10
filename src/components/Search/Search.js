import React, { Component } from "react";
import { Container, Columns, Column, Field, FieldBody, Control, Input, Button } from "bloomer";
import classnames from "classnames";
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
				});
				return { options: packages };
			});
	}

	onChange = value => {
		this.setState({
			value: value
		});
	};

	handleClick = e => {
		e.preventDefault();
		console.log(">>>-SHRIRAM->>> this.state.value", this.state.value);
		this.props.search(this.state.value.name);
		this.props.startLoading(true);
	};

	render() {
		const AsyncSearch = Select.Async;
		return (
			<Container>
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
											loadOptions={this.getPackageNames}
											labelKey="name"
										/>
										{/* <Input
											placeholder="Search for an npm package"
											id="packageName"
											onChange={this.handleChange}
										/> */}
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
