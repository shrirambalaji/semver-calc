const url = "https://cors-anywhere.herokuapp.com/http://registry.npmjs.org";

export const getPackages = packageName =>
	fetch(`${url}/${packageName}`, {
		headers: {
			"Content-Type": "application/json",
			Origin: "x-requested-with"
		}
	}).then(res => res.json());
