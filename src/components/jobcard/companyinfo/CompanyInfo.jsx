import React, { useContext } from "react";
import Box from "@mui/material/Box";
import "./index.css";
import { Typography } from "@mui/material";
import { JobContext } from "../../../contexts/JobContextProvider";
const CompanyInfo = ({ logoUrl, companyName, jobRole }) => {
	return (
		<Box display="flex" gap={2} marginBottom={2} alignItems={"center"}>
			<img
				src={logoUrl}
				alt={companyName + " logo"}
				className="company-logo"
			/>
			<div className="company-info-text-container">
				<Typography variant="body2" color={"#8b8b8b"} fontWeight={500}>
					{companyName}
				</Typography>
				<Typography variant="body2" fontWeight={300}>
					{jobRole.charAt(0).toUpperCase() + jobRole.slice(1)}
				</Typography>
				<Typography variant="subtitle2">India</Typography>
			</div>
		</Box>
	);
};

export default CompanyInfo;
