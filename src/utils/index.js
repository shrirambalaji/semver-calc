import semver from "semver";
const matcher = (versionNo, versions, latest, distTags) => {
	const tempVersions = [];
	versions.forEach(v => {
		const isSatisfied =
			distTags[versionNo] === v.version ||
			(semver.satisfies(v.version, versionNo) && (!latest || semver.lte(v.version, latest)));
		if (isSatisfied) {
			v.classes = "matched";
		} else {
			v.classes = null;
		}
		tempVersions.push(v);
	});
	return tempVersions;
};

export default matcher;
