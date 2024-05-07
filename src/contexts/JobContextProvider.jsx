import React, { createContext, useReducer, useState } from "react";

export const JobContext = createContext();
const reducer = (state, action) => {};
const JobContextProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [jobs, setJobs] = useState([]);
	const [totalJobs, setTotalJobs] = useState(3434);
	const [hasNext, setHasNext] = useState(true);
	return (
		<JobContext.Provider
			value={{
				loading,
				setLoading,
				error,
				setError,
				jobs,
				setJobs,
				totalJobs,
				setTotalJobs,
				hasNext,
				setHasNext,
			}}
		>
			{children}
		</JobContext.Provider>
	);
};

export default JobContextProvider;
