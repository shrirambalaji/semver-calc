import React, { Component } from "react";
import {
	Container,
	Columns,
	Column,
	Field,
	FieldBody,
	Label,
	Control,
	Input,
	Button
} from "bloomer";
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
					<Column isSize="1/2">
						<Field isHorizontal>
							<FieldBody>
								<Field isGrouped>
									<Control isExpanded>
										<Input placeholder="Search for an npm package" id="packageName" />
									</Control>
								</Field>
								<Button id="submitButton" isColor="success" isOutlined>
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
