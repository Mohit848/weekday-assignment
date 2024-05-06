import React, { useCallback, useEffect, useState } from "react";
import { Jobcard } from "../../components/jobcard/Jobcard";

const SearchJobs = () => {
	const [loading, setLoading] = useState(false);
	const [hasNext, setHasNext] = useState(false);
	const [error, setError] = useState("");
	const [jobs, setJobs] = useState([]);
	const [totalJobs, setTotalJobs] = useState(0);

	const fetchJobs = async (limit, offset) => {
		setLoading(true);
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
		const resp = await fetch(
			`https://api.weekday.technology/adhoc/getSampleJdJSON`,
			requestOptions
		);
		if (!resp.ok) {
			setError(`Error occured with code - ${resp.status}`);
		}
		const data = await resp.json();
		setLoading(false);

		return data;
	};
	useEffect(() => {
		fetchJobs(10, 0).then((data) => {
			setJobs((prev) => {
				return [...prev, ...data.jdList];
			});
			setTotalJobs(data.totalCount);
		});
	}, []);

	return (
		<div>
			{jobs && <p>{jobs.length}</p>}
			{totalJobs && <p>{totalJobs}</p>}
			{error && <p>{error}</p>}
			{loading && <p>Loading...</p>}
		</div>
	);
};

export default SearchJobs;
