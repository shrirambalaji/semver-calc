import React, { Component } from "react";
import { Container, Columns, Column, Field, FieldBody, Control, Input, Button } from "bloomer";
import classnames from "classnames";
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
		this.props.search(this.state.packageName);
		this.props.startLoading(true);
	};

	render() {
		return (
			<Container>
				<Columns isCentered>
					<Column isSize="1/2">
						<Field isHorizontal>
							<FieldBody>
								<Field isGrouped>
									<Control isExpanded>
										<Input
											placeholder="Search for an npm package"
											id="packageName"
											onChange={this.handleChange}
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
