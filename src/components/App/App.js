import React, { Component } from "react";
import logo from "../../assets/images/logo.svg";
import "../../assets/fonts/hk-grotesk/hk-grotesk.css";
import Search from "../Search/Search";
import { Container, HeroBody, Hero, Title } from "bloomer";
import { getPackages } from "../../api";
import "./App.css";

class App extends Component {
	handleSearch = name => {
		getPackages(name).then(packages => {
			console.log(packages);
		});
	};

	render() {
		return (
			<div>
				<Hero isColor="info" isSize="small" className="App-header">
					<HeroBody>
						<Container hasTextAlign="centered">
							<Title isSize={1} className="App-logo">
								semver-calc
							</Title>
							<Title isSize={6} className="App-subHeader">
								A tool to learn semantic versioning in ⬡.js better
							</Title>
						</Container>
					</HeroBody>
				</Hero>
				<Container className="is-centered">
					<Search search={this.handleSearch} />
				</Container>
			</div>
		);
	}
}

export default App;
