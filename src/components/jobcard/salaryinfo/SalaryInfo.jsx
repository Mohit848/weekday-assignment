import { Box, Typography } from "@mui/material";
import React from "react";

const SalaryInfo = ({ minJdSalary, maxJdSalary, salaryCurrencyCode }) => {
	return (
		<Box>
			{`Estimated Salary `}
			{minJdSalary && (
				<Typography
					fontSize={12}
					variant="body2"
					fontWeight={300}
				>{`Minimum: ${salaryCurrencyCode} ${minJdSalary} k/yr`}</Typography>
			)}
			{maxJdSalary && (
				<Typography
					fontSize={12}
					variant="body2"
					fontWeight={300}
				>{`Maximum: ${salaryCurrencyCode} ${maxJdSalary} K/yr`}</Typography>
			)}
		</Box>
	);
};

export default SalaryInfo;
