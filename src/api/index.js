const url = "https://npm-proxy.now.sh/proxy/registry.npmjs.org";
const headers = { Origin: "x-requested-with" };

export const getPackages = packageName =>
	fetch(`${url}/${packageName}`, headers).then(res => res.json());
