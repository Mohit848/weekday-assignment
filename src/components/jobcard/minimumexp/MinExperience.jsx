import { Box, Typography } from "@mui/material";
import React from "react";

const MinExperience = () => {
	return (
		<Box>
			<Typography variant="body2" color={"#8b8b8b"}>
				Minimum Experience
			</Typography>
			<Typography variant="body2" fontWeight={300}>
				{"4"} Years
			</Typography>
		</Box>
	);
};

export default MinExperience;
