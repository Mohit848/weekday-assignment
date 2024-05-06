import React, { createContext } from "react";

export const JobContext = createContext();
const JobContextProvider = ({ children, jobData }) => {
	const value = jobData;
	return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};

export default JobContextProvider;
