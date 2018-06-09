import React, { Component, Fragment } from "react";
import { Columns, Column, Field, FieldBody, Input } from "bloomer";
import PropTypes from "prop-types";
import { Control } from "bloomer/lib/elements/Form/Control";
import "./Package.css";
import matcher from "../../utils";

class Package extends Component {
	static getDerivedStateFromProps = nextProps => {
		return {
			versions: nextProps.versions
		};
	};

	state = {
		versions: this.props.versions
	};

	handleChange = e => {
		e.preventDefault();
		const newVersions = matcher(
			e.target.value,
			this.state.versions,
			this.props.distTags.latest,
			this.props.distTags
		);
		this.setState({ versions: newVersions });
	};

	renderPackageVersions(versions) {
		let packageVersions = versions.map(version => {
			return (
				<li key={version.version}>
					<code className={version.classes !== null ? version.classes : ""}>{version.version}</code>
				</li>
			);
		});

		return (
			<div isCentered>
				<ul isCentered id="versions">
					{packageVersions}
				</ul>
			</div>
		);
	}

	render() {
		const { versions } = this.state;
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
				<Columns isCentered isSize={12} className="versions-columns" isMultiline>
					{this.renderPackageVersions(versions)}
				</Columns>
			</Fragment>
		);
	}
}

PropTypes.defaultProps = {
	versions: []
};

Package.propTypes = {
	versions: PropTypes.arrayOf(
		PropTypes.shape({
			version: PropTypes.string.isRequired,
			classes: PropTypes.oneOf([PropTypes.string, null])
		})
	)
};

export default Package;
