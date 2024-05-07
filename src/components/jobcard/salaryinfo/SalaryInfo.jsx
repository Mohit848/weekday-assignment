import { Box, Typography } from "@mui/material";
import React from "react";

const SalaryInfo = ({ minJdSalary, maxJdSalary, salaryCurrencyCode }) => {
	return (
		<Box>
			{`Estimated Salary `}
			{
				<Typography fontSize={12} variant="body2" fontWeight={300}>
					{minJdSalary &&
						`Minimum: ${salaryCurrencyCode} ${minJdSalary} k/yr`}
				</Typography>
			}
			{
				<Typography fontSize={12} variant="body2" fontWeight={300}>
					{maxJdSalary &&
						`Maximum: ${salaryCurrencyCode} ${maxJdSalary} K/yr`}
				</Typography>
			}
		</Box>
	);
};

export default SalaryInfo;
