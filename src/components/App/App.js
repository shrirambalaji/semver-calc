import React, { Component } from "react";
// import logo from "../../assets/images/logo.svg";
import "../../assets/fonts/hk-grotesk/hk-grotesk.css";
import Search from "../Search/Search";
import Package from "../Package/Package";
import HowTo from "../HowTo/HowTo";
import content from "../../__static__/how-to.json";
import { Container, HeroBody, Hero, Title } from "bloomer";
import { getPackages } from "../../api";
import "./App.css";

class App extends Component {
	state = {
		packages: undefined,
		versions: []
	};

	handleSearch = name => {
		getPackages(name).then(packages => {
			const distTags = packages["dist-tags"];
			const versions = Object.keys(packages.versions).map(version => {
				return {
					version,
					classes: null
				};
			});
			this.setState({ versions, packages, distTags });
		});
	};

	render() {
		const { packages, versions, distTags } = this.state;
		console.log(versions);
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
				<Container className="is-centered margin-top-100">
					<Title isSize={6} hasTextAlign="centered">
						New to semantic versioning? Learn the basics
						<a href="https://docs.npmjs.com/getting-started/semantic-versioning" target="_blank">
							&nbsp;here
						</a>
					</Title>
					<Search search={this.handleSearch} />
					{packages && (
						<Container>
							<Package versions={versions} distTags={distTags} />
						</Container>
					)}
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
