import React from "react";
import CompanyInfo from "./companyinfo/CompanyInfo";

export const Jobcard = () => {
	return (
		<div>
			{/* Company Info */}
			<CompanyInfo />
			{/* <div>
				<div>
					<img
						src="https://logo.clearbit.com/dropbox.com"
						alt="Company logo"
					/>
				</div>
				<p>Compnay Title</p>
				<p>Job Title</p>
				<p>Country</p>
			</div> */}
			{/* salary Info */}
			<div>
				<p>Estimated Salary : {"₹30 - 50 LPA"} ✅</p>
			</div>
			<div>
				<p>About Company</p>
				<p>About us : </p>
				<p>fslkdfj jsdlkfj s lsjflkdsjf sdlkf jsl</p>
			</div>
			<div>
				<p>Minimum Experience</p>
				<p>{"4"} Years</p>
			</div>
		</div>
	);
};
