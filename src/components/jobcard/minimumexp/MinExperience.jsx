import { Box, Typography } from "@mui/material";
import React from "react";

const MinExperience = ({ minExp, maxExp }) => {
	return (
		<Box>
			{minExp && (
				<>
					<Typography variant="body2" color={"#8b8b8b"}>
						{`Minimum Experience: ${minExp} Years`}
					</Typography>
				</>
			)}
			{maxExp && (
				<>
					<Typography variant="body2" color={"#8b8b8b"}>
						{`Maximum Experience: ${maxExp} Years`}
					</Typography>
				</>
			)}
			{!minExp && !maxExp && (
				<Typography variant="body2" color={"#8b8b8b"}>
					{`No Experience Required :)`}
				</Typography>
			)}
		</Box>
	);
};

export default MinExperience;
