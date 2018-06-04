const matcher = (versionNo, versions) => {
	const tempVersions = [];
	versions.forEach(v => {
		if (v.version === versionNo) {
			v.classes = "matched";
		} else {
			v.classes = null;
		}
		tempVersions.push(v);
	});
	return tempVersions;
};

export default matcher;
