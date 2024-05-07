import React, { useEffect, useState } from "react";
import { Jobcard } from "../../components/jobcard/Jobcard";
import { Box, CircularProgress } from "@mui/material";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import fetchJobs from "../../services/fetchJobs";
import MultiSelectFilterDD from "../../components/dropdown/MultiSelectFilterDD";
import Filter from "../../components/filter/Filter";

const SearchJobs = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [jobs, setJobs] = useState([]);
	const [totalJobs, setTotalJobs] = useState(0);
	const [hasNext, setHasNext] = useState(true);
	const handleFilterUpdate = (name, optionArr) => {
		console.log(name, " --- ", optionArr);
	};
	const ref = useIntersectionObserver(() => {
		fetchJobs(
			jobs.length,
			jobs,
			setJobs,
			totalJobs,
			setLoading,
			setHasNext
		).then((data) => {
			setJobs((prev) => {
				return [...prev, ...data.jdList];
			});
			setTotalJobs(data.totalCount);
		});
	}, [hasNext, !loading]);

	useEffect(() => {
		fetchJobs(
			jobs.length,
			jobs,
			setJobs,
			totalJobs,
			setLoading,
			setHasNext
		).then((data) => {
			setJobs((prev) => {
				return [...prev, ...data.jdList];
			});
			setTotalJobs(data.totalCount);
		});
		return () => {};
	}, []);
	return (
		<div>
			<Filter handleFilterUpdate={handleFilterUpdate} />
			<Box
				display={"flex"}
				flexWrap="wrap"
				justifyContent={"center"}
				gap={1}
			>
				{jobs &&
					jobs.map((job, i, jobs) => {
						return (
							<div
								key={job.jdUid}
								ref={jobs.length - 1 === i ? ref : null}
							>
								<Jobcard {...job} />
							</div>
						);
					})}
			</Box>
			<Box textAlign={"center"}>{loading && <CircularProgress />}</Box>
			{error && <p>Error occured</p>}
		</div>
	);
};

export default SearchJobs;
