import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";

const JobCardThemeProvider = ({ children }) => {
	const theme = createTheme({
		components: {
			MuiPaper: {
				styleOverrides: {
					root: {
						borderRadius: "20px",
					},
				},
			},
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
			MuiButton: {
				styleOverrides: {
					root: {
						fontFamily: "Lexend",
						textTransform: "none",
						backgroundColor: "rgb(85, 239, 196)",
						color: "black",
						borderRadius: "8px",
						fontWeight: 500,
						padding: "8px",
						":hover": {
							backgroundColor: "rgb(60, 200, 170)",
						},
					},
				},
			},
		},
	});
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default JobCardThemeProvider;
