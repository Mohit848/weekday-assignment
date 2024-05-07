import React, { useEffect, useState } from "react";
import fetchJobsService from "../services/fetchJobsService";
const useFetchJobsOnLoad = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [totalJobs, setTotalJobs] = useState(0);
	const [jobs, setJobs] = useState([]);
	useEffect(() => {
		fetchJobsService(10, 0).then((data) => {
			setJobs(() => {
				return [...data.jdList];
			});
			setTotalJobs(data.totalCount);
		});
		return () => {};
	}, []);

	return {
		loading: loading,
		error: error,
		totalJobs: totalJobs,
		jobs: jobs,
	};
};

export default useFetchJobsOnLoad;
