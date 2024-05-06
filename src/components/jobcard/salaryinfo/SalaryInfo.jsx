import { Box, Typography } from "@mui/material";
import React from "react";

const SalaryInfo = () => {
	return (
		<Box>
			<Typography variant="body2" fontWeight={300}>
				Estimated Salary : {"₹30 - 50 LPA"} ✅
			</Typography>
		</Box>
	);
};

export default SalaryInfo;
