import { Box } from "@mui/material";
import React from "react";
import MultiSelectFilterDD from "../dropdown/MultiSelectFilterDD";

const Filter = ({ handleFilterUpdate }) => {
	return (
		<Box
			marginTop={10}
			display={"flex"}
			flexWrap="wrap"
			justifyContent={"center"}
			gap={1}
		>
			<MultiSelectFilterDD
				placeholder="Select Roles"
				options={["Frontend", "backend", "Devops"]}
				handleFilterUpdate={handleFilterUpdate}
			/>
			<MultiSelectFilterDD
				placeholder="Min Experience"
				options={["Frontend", "backend", "Devops"]}
				handleFilterUpdate={handleFilterUpdate}
			/>
			<MultiSelectFilterDD
				placeholder="Location"
				options={["Frontend", "backend", "Devops"]}
				handleFilterUpdate={handleFilterUpdate}
			/>
			<MultiSelectFilterDD
				placeholder="Remote"
				options={["Frontend", "backend", "Devops"]}
				handleFilterUpdate={handleFilterUpdate}
			/>
			<MultiSelectFilterDD
				placeholder="Tech Stack"
				options={["Frontend", "backend", "Devops"]}
				handleFilterUpdate={handleFilterUpdate}
			/>
			<MultiSelectFilterDD
				placeholder="Min Base Pay"
				options={["Frontend", "backend", "Devops"]}
				handleFilterUpdate={handleFilterUpdate}
			/>
		</Box>
	);
};

export default Filter;
