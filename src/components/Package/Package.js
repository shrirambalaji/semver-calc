import React, { Component, Fragment } from "react";
import { Columns, Column, Field, FieldBody, Input } from "bloomer";
import PropTypes from "prop-types";
import "./Package.css";
import { Control } from "bloomer/lib/elements/Form/Control";

class Package extends Component {
	static getDerivedStateFromProps = nextProps => {
		return null;
	};

	state = {
		versions: this.props.versions
	};

	handleChange = e => {
		e.preventDefault();
		const { versions } = this.state;
	};

	render() {
		const { versions } = this.state;
		const cutoff = Math.floor(versions.length / 4);
		return (
			<Fragment>
				<Columns isCentered>
					<Column isSize="1/2">
						<Field isHorizontal>
							<FieldBody>
								<Control>
									<Input placeholder="Search for a version" onChange={this.handleChange} />
								</Control>
							</FieldBody>
						</Field>
					</Column>
				</Columns>
				<Columns isCentered className="versions-columns">
					<Column isSize="1/4">
						{versions.slice(0, cutoff).map(version => (
							<p key={version.version}>
								<code>{version.version}</code>
							</p>
						))}
					</Column>
					<Column isSize="1/4">
						{versions.slice(cutoff, cutoff * 2).map(version => (
							<p key={version.version}>
								<code>{version.version}</code>
							</p>
						))}
					</Column>
					<Column isSize="1/4">
						{versions.slice(cutoff * 2, cutoff * 3).map(version => (
							<p key={version.version}>
								<code>{version.version}</code>
							</p>
						))}
					</Column>
					<Column isSize="1/4">
						{versions.slice(cutoff * 3).map(version => (
							<p key={version.version}>
								<code>{version.version}</code>
							</p>
						))}
					</Column>
				</Columns>
			</Fragment>
		);
	}
}

PropTypes.defaultProps = {
	versions: []
};

Package.propTypes = {
	versions: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Package;
