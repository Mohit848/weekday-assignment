import { Box, Button, Typography } from "@mui/material";
import React from "react";

const EasyApplyButton = ({ children }) => {
	return (
		<Box paddingX={2} paddingBottom={2} width={"100%"}>
			<Button
				sx={{
					width: "100%",
				}}
				variant="contained"
				disableElevation
			>
				<Typography>{children}</Typography>
			</Button>
		</Box>
	);
};

export default EasyApplyButton;
