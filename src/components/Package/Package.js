import React, { Component } from "react";
import { Columns, Column } from "bloomer";

class Package extends Component {
	state = {
		versions: this.props.versions
	};

	render() {
		const { versions } = this.state;
		const cutoff = Math.floor(versions.length / 4);
		console.log(versions, cutoff);
		return (
			<Columns isCentered>
				<Column isSize="1/4">{versions.slice(0, cutoff).map(version => <p>{version}</p>)}</Column>
				<Column isSize="1/4">
					{versions.slice(cutoff, cutoff * 2).map(version => <p>{version}</p>)}
				</Column>
				<Column isSize="1/4">
					{versions.slice(cutoff * 2, cutoff * 3).map(version => <p>{version}</p>)}
				</Column>
				<Column isSize="1/4">{versions.slice(cutoff * 3).map(version => <p>{version}</p>)}</Column>
			</Columns>
		);
	}
}

export default Package;
