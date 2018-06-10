import React, { Component } from "react";
import { Columns, Column, Box, Title } from "bloomer";
import "./HowTo.css";
import ReactMarkdown from "react-markdown";

class HowTo extends Component {
	renderExamples(input) {
		let listItems = input.map((example, index) => {
			return <li key={index}>{example}</li>;
		});

		return (
			<div>
				<Title isSize={6}>Examples</Title>
				<ul id="examplesList">{listItems}</ul>
			</div>
		);
	}

	renderHowToCards(content) {
		let howToCards = content.map((el, index) => {
			return (
				<Column isSize={4} key={index}>
					<Box className="HowTo-box">
						<Title isSize={5}>{el.heading}</Title>
						<ReactMarkdown source={el.description} />
						<div className="Example-container">{this.renderExamples(el.examples)}</div>
					</Box>
				</Column>
			);
		});

		return <Columns isMultiline>{howToCards}</Columns>;
	}

	render() {
		return (
			<div className="HowTo-body">
				<Title hasTextAlign="centered" className="paddingT-30">
					How do I?
				</Title>
				<div>{this.renderHowToCards(this.props.content)}</div>
			</div>
		);
	}
}

export default HowTo;
