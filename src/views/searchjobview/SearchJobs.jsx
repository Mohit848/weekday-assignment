import React, { useEffect, useState } from "react";
import { Jobcard } from "../../components/jobcard/Jobcard";
import { Box, CircularProgress } from "@mui/material";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import fetchJobs from "../../services/fetchJobs";
import Filter from "../../components/filter/Filter";

const SearchJobs = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [jobs, setJobs] = useState([]);
	const [totalJobs, setTotalJobs] = useState(0);
	const [hasNext, setHasNext] = useState(true);
	// Collecting all filters' state at a single place
	const [multiselectFilters, setMultiSelectFilters] = useState({
		roles: [],
		remote: [],
		minExperience: 0,
		minBasePay: 0,
		companyName: "",
	});
	// filteredJobs would be used as main array and runFilter will run
	// on every initial Render, on New jobs load and every time filters update
	// This can be shfted to other JS file to minimise cluttering of code
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
			})
			.filter((salary) => {
				return (
					multiselectFilters.companyName === "" ||
					salary.companyName.includes(multiselectFilters.companyName)
				);
			});
		setFilteredJobs(temp);
	};

	//This method is shared with every filter dropdown to track filter changes
	const handleFilterUpdate = (name, optionArr, option) => {
		if (name === "roles" || name === "remote") {
			setMultiSelectFilters((prev) => {
				let obj = { ...prev, [name]: [...optionArr] };
				return obj;
			});
		}
		if (
			name === "minExperience" ||
			name === "minBasePay" ||
			name === "companyName"
		) {
			setMultiSelectFilters((prev) => {
				let obj = { ...prev, [name]: option };
				return obj;
			});
		}
	};

	//tracks changes in jobs and multiselectfilter state
	useEffect(() => {
		runFilter();
	}, [multiselectFilters, jobs]);

	//Intersecton observer custom hook, fetches new jobs when last job is excountered on screen
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
	// To load jobs when page laods for the first time
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
				{filteredJobs &&
					filteredJobs.map((job, i, jobs) => {
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
		</div>
	);
};

export default SearchJobs;
