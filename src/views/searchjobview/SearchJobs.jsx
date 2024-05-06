import React, { useCallback, useEffect, useState } from "react";
import { Jobcard } from "../../components/jobcard/Jobcard";
import { Box } from "@mui/material";

const SearchJobs = () => {
	const [loading, setLoading] = useState(false);
	const [hasNext, setHasNext] = useState(true);
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
			<Box
				display={"flex"}
				flexWrap="wrap"
				justifyContent={"center"}
				gap={1}
			>
				{jobs &&
					jobs.map((job, i) => {
						return <Jobcard key={i} {...job} />;
					})}
			</Box>

			{totalJobs && <p>{totalJobs}</p>}
			{error && <p>Error occured</p>}
			{loading && <p>Loading...</p>}
		</div>
	);
};

export default SearchJobs;
