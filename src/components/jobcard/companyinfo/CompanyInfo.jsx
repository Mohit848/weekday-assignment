import React from "react";
import Box from "@mui/material/Box";
import "./index.css";
import { Typography } from "@mui/material";
const CompanyInfo = () => {
	return (
		<Box display="flex" gap={2} marginBottom={2}>
			<img
				src="https://logo.clearbit.com/dropbox.com"
				alt="Company logo"
				className="company-logo"
			/>
			<div className="company-info-text-container">
				<Typography variant="body2" color={"#8b8b8b"} fontWeight={500}>
					Firefly
				</Typography>
				<Typography variant="body2" fontWeight={300}>
					Frontend Engineer
				</Typography>
				<Typography variant="subtitle2">India</Typography>
			</div>
		</Box>
	);
};

export default CompanyInfo;
