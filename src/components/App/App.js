import React, { Component } from "react";
// import logo from "../../assets/images/logo.svg";
import "../../assets/fonts/hk-grotesk/hk-grotesk.css";
import Search from "../Search/Search";
import HowTo from "../HowTo/HowTo";
import content from "../../_static__/how-to.json";
import { Container, HeroBody, Hero, Title } from "bloomer";
import "./App.css";

class App extends Component {
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
				<Container>
					<Search />
				</Container>
				<div id="howToContainer" className="is-centered">
					<Container isFluid>
						<HowTo content={content["howTo"]} />
					</Container>
				</div>
			</div>
		);
	}
}

export default App;
