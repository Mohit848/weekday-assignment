import { Box } from "@mui/material";
import React from "react";
import MultiSelectFilterDD from "../dropdown/MultiSelectFilterDD";
import {
	Roles,
	minBasePay,
	minExperience,
	remote,
	techStack,
} from "../../constants/filterOptions";
import SingleSelectDD from "../dropdown/SingleSelectDD";

const Filter = ({ handleFilterUpdate, runFilter }) => {
	return (
		<Box
			marginTop={10}
			display={"flex"}
			flexWrap="wrap"
			justifyContent={"center"}
			gap={1}
		>
			<MultiSelectFilterDD
				name="roles"
				placeholder="Select Roles"
				multiple={true}
				options={Roles}
				handleFilterUpdate={handleFilterUpdate}
			/>
			<SingleSelectDD
				placeholder="Min Experience"
				name="minExperience"
				options={minExperience}
				suffixText="Years"
				handleFilterUpdate={handleFilterUpdate}
			/>
			<MultiSelectFilterDD
				placeholder="Remote"
				name="remote"
				multiple={true}
				options={remote}
				handleFilterUpdate={handleFilterUpdate}
			/>
			{/* <MultiSelectFilterDD
				placeholder="Tech Stack"
				name="techstack"
				options={techStack}
				handleFilterUpdate={handleFilterUpdate}
			/> */}
			<SingleSelectDD
				placeholder="Min Base Pay"
				name="minBasePay"
				options={minBasePay}
				suffixText="k/yr"
				handleFilterUpdate={handleFilterUpdate}
			/>
		</Box>
	);
};

export default Filter;
