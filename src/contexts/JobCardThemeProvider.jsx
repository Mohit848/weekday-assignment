import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";

const JobCardThemeProvider = ({ children }) => {
	const theme = createTheme({
		components: {
			MuiCard: {
				styleOverrides: {
					root: {
						boxShadow: "none",
					},
				},
			},
			MuiTypography: {
				styleOverrides: {
					root: {
						fontFamily: "Lexend",
					},
				},
			},
		},
	});
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default JobCardThemeProvider;
