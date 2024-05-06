import React from "react";
import "./index.css";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CompanyInfo from "./companyinfo/CompanyInfo";
import JobCardThemeProvider from "../../contexts/JobCardThemeProvider";
import { Typography } from "@mui/material";
import AboutCompany from "./aboutcompany/AboutCompany";
export const Jobcard = () => {
	return (
		<JobCardThemeProvider>
			<Paper
				elevation={2}
				sx={{ width: "368px", height: "564px", borderRadius: "20px" }}
			>
				<Box>
					<Card>
						<CardContent>
							<CompanyInfo />
							<div>
								<Typography variant="body2" fontWeight={300}>
									Estimated Salary : {"₹30 - 50 LPA"} ✅
								</Typography>
							</div>
							<AboutCompany />
							<Typography variant="body2" color={"#8b8b8b"}>
								Minimum Experience
							</Typography>
							<Typography variant="body2" fontWeight={300}>
								{"4"} Years
							</Typography>
						</CardContent>
					</Card>
				</Box>
			</Paper>
		</JobCardThemeProvider>
	);
};
