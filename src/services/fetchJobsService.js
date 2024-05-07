const fetchJobsService = async (limit, offset) => {
	try {
		console.log("Fetching data");
		//setLoading(true);
		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		const body = JSON.stringify({
			limit: limit,
			offset: offset,
		});
		const requestOptions = {
			method: "POST",
			headers: myHeaders,
			body,
		};
		let resp = null;

		resp = await fetch(
			`https://api.weekday.technology/adhoc/getSampleJdJSON`,
			requestOptions
		);
		const data = await resp.json();
		// if (data.jdList + jobs.length >= totalJobs) {
		// 	setHasNext(false);
		// }
		//setLoading(false);
		return data;
	} catch (err) {}
};
export default fetchJobsService;
