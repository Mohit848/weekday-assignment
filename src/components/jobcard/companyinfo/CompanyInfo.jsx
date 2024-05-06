import React from "react";

const CompanyInfo = () => {
	return (
		<div>
			<div>
				<img
					src="https://logo.clearbit.com/dropbox.com"
					alt="Company logo"
				/>
			</div>
			<div>
				<p>Compnay Title</p> {/* It must be a link*/}
				<p>Job Title</p>
				<p>Country</p>
			</div>
		</div>
	);
};

export default CompanyInfo;
