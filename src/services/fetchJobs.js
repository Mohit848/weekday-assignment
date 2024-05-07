async function fetchJobs(
	offset,
	jobs,
	setJobs,
	totalJobs,
	setLoading,
	setHasNext
) {
	setLoading(true);
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	const body = JSON.stringify({
		limit: 10,
		offset: offset,
	});
	const requestOptions = {
		method: "POST",
		headers: myHeaders,
		body,
	};
	let resp = null;
	try {
		resp = await fetch(
			`https://api.weekday.technology/adhoc/getSampleJdJSON`,
			requestOptions
		);
		const data = await resp.json();
		if (data.jdList + jobs.length >= totalJobs) {
			setHasNext(false);
		}
		setLoading(false);
		return data;
	} catch (err) {}
}
export default fetchJobs;
