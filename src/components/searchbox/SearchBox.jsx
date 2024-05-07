import { FormControl, Input } from "@mui/base";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const InputProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 3 + ITEM_PADDING_TOP,
			width: 190,
		},
	},
};
const SearchBox = ({ placeholder, handleFilterUpdate, name }) => {
	const [companyName, setCompanyName] = useState("");
	//Handelling state changes and invoking updation of filters state in SearchJobs comp
	const handleChange = (event) => {
		setCompanyName(event.target.value);
	};

	useEffect(() => {
		handleFilterUpdate(name, [], companyName);
	}, [companyName, name]);
	return (
		<div>
			<TextField
				label={placeholder}
				InputLabelProps={{
					sx: {
						fontFamily: "Lexend",
					},
				}}
				InputProps={{
					sx: {
						fontFamily: "Lexend",
						fontSize: "14px",
					},
				}}
				value={companyName}
				onChange={handleChange}
			/>
		</div>
	);
};

export default SearchBox;
