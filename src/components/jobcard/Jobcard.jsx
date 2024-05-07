import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CompanyInfo from "./companyinfo/CompanyInfo";
import JobCardThemeProvider from "../../contexts/JobCardThemeProvider";
import AboutCompany from "./aboutcompany/AboutCompany";
import SalaryInfo from "./salaryinfo/SalaryInfo";
import MinExperience from "./minimumexp/MinExperience";
import EasyApplyButton from "./applybutton/EasyApplyButton";

export const Jobcard = ({
	jdLink,
	jobDetailsFromCompany,
	maxJdSalary,
	minJdSalary,
	salaryCurrencyCode,
	location,
	minExp,
	maxExp,
	jobRole,
	companyName,
	logoUrl,
}) => {
	return (
		<JobCardThemeProvider>
			<Paper
				elevation={2}
				sx={{
					width: "368px",
					height: "auto",
					margin: "20px",
				}}
			>
				<Box>
					<Card>
						<CardContent>
							<CompanyInfo
								jobRole={jobRole}
								companyName={companyName}
								logoUrl={logoUrl}
								location={location}
							/>
							<SalaryInfo
								minJdSalary={minJdSalary}
								maxJdSalary={maxJdSalary}
								salaryCurrencyCode={salaryCurrencyCode}
							/>
							<AboutCompany
								jobDetailsFromCompany={jobDetailsFromCompany}
								jdLink={jdLink}
							/>
							<MinExperience minExp={minExp} maxExp={maxExp} />
						</CardContent>
					</Card>
				</Box>
				<Box display={"flex"} flexGrow={1}>
					<EasyApplyButton>{"⚡ Easy Apply"}</EasyApplyButton>
				</Box>
			</Paper>
		</JobCardThemeProvider>
	);
};
