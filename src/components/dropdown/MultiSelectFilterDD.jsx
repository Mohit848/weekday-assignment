import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 190,
		},
	},
};
const Chip = ({ selected }) => {
	return (
		<div
			style={{
				margin: 0,
				backgroundColor: "lightgray",
				borderRadius: "3px",
				padding: "0px 8px",
			}}
		>
			<p style={{ margin: "0 2px 0 0", fontSize: "12px" }}>
				<strong>{selected}</strong>
			</p>
		</div>
	);
};
const MultiSelectFilterDD = ({
	children,
	placeholder,
	options,
	handleFilterUpdate,
	suffixText,
	name,
}) => {
	const [selectedOptions, setSelectedOptions] = useState([]);

	//Handelling state changes and invoking updation of filters state in SearchJobs comp
	const handleChange = (event) => {
		setSelectedOptions(event.target.value);
	};
	useEffect(() => {
		handleFilterUpdate(name, selectedOptions, "");
	}, [selectedOptions, name]);
	return (
		<div>
			<FormControl sx={{ m: 1, width: "190px", flexWrap: "wrap" }}>
				<InputLabel
					sx={{ fontSize: "15px", fontFamily: "Lexend" }}
					id="multi-select-label"
				>
					{placeholder}
				</InputLabel>
				<Select
					labelId="multi-select-label"
					label={placeholder}
					name={placeholder}
					id="multi-select"
					multiple
					value={selectedOptions}
					onChange={handleChange}
					renderValue={(selected) => (
						<Box
							sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
						>
							{selected.map((value) => (
								<Chip key={value} selected={value} />
							))}
						</Box>
					)}
					MenuProps={MenuProps}
				>
					{options &&
						options.map((option, i) => {
							const value =
								typeof option === "string"
									? option.toLowerCase()
									: option;
							return (
								<MenuItem
									key={i}
									value={value}
									sx={{
										fontSize: "14px",
										fontFamily: "Lexend",
									}}
								>
									{`${option}`}
									{suffixText && ` ${suffixText}`}
								</MenuItem>
							);
						})}
				</Select>
			</FormControl>
		</div>
	);
};

export default MultiSelectFilterDD;
