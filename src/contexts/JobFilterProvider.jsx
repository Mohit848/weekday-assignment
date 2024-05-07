import React, { createContext, useState } from "react";

export const JobFilterContext = createContext();

const JobFilterProvider = ({ children }) => {
	const [filteredJobs, setFilteredJobs] = useState([]);
	const filterJobs = (jobs, filters) => {
		if (!filters) {
			setFilteredJobs(jobs);
		}
	};
	return (
		<JobFilterContext.Provider value={{ filteredJobs, filterJobs }}>
			{children}
		</JobFilterContext.Provider>
	);
};

export default JobFilterProvider;
