import React, { useEffect, useState } from "react";
import { Jobcard } from "../../components/jobcard/Jobcard";
import { Box, CircularProgress } from "@mui/material";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import fetchJobs from "../../services/fetchJobs";
import MultiSelectFilterDD from "../../components/dropdown/MultiSelectFilterDD";
import Filter from "../../components/filter/Filter";
import { minBasePay, minExperience } from "../../constants/filterOptions";

const SearchJobs = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [jobs, setJobs] = useState([]);
	const [totalJobs, setTotalJobs] = useState(0);
	const [hasNext, setHasNext] = useState(true);
	const [multiselectFilters, setMultiSelectFilters] = useState({
		roles: [],
		remote: [],
		minExperience: 0,
		minBasePay: 0,
	});
	const [filteredJobs, setFilteredJobs] = useState(jobs);

	const runFilter = () => {
		let temp = jobs;

		temp = temp
			.filter((job) => {
				return (
					multiselectFilters.roles.length === 0 ||
					multiselectFilters.roles.includes(job.jobRole)
				);
			})
			.filter((roles) => {
				return (
					multiselectFilters.remote.length === 0 ||
					roles.location.toLowerCase() === "remote"
				);
			})
			.filter((location) => {
				return (
					multiselectFilters.minExperience == 0 ||
					location.minExp === null ||
					parseInt(location.minExp) <=
						parseInt(multiselectFilters.minExperience)
				);
			})
			.filter((exp) => {
				return (
					multiselectFilters.minBasePay == 0 ||
					!exp.minJdSalary === null ||
					parseInt(exp.minJdSalary) >=
						parseInt(multiselectFilters.minBasePay)
				);
			});
		setFilteredJobs(temp);
	};
	const handleFilterUpdate = (name, optionArr, option) => {
		if (name === "roles" || name === "remote") {
			setMultiSelectFilters((prev) => {
				let obj = { ...prev, [name]: [...optionArr] };
				return obj;
			});
		}
		if (name === "minExperience" || name === "minBasePay") {
			setMultiSelectFilters((prev) => {
				let obj = { ...prev, [name]: option };
				return obj;
			});
		}
	};
	useEffect(() => {
		runFilter();
	}, [multiselectFilters, jobs]);
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
			<Filter
				handleFilterUpdate={handleFilterUpdate}
				runFilter={runFilter}
			/>
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
