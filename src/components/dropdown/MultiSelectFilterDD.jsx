import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 220,
		},
	},
};
const handleChipRemove = () => {
	console.log("Chip closed");
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
}) => {
	const [selectedOptions, setSelectedOptions] = useState([]);
	const handleChange = (event) => {
		setSelectedOptions(event.target.value);
		handleFilterUpdate(event.target.name, selectedOptions);
	};

	return (
		<div>
			<FormControl sx={{ m: 1, width: "190px", flexWrap: "wrap" }}>
				<InputLabel sx={{ fontSize: "14px" }} id="multi-select-label">
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
							return (
								<MenuItem key={i} value={option}>
									{option}
								</MenuItem>
							);
						})}
				</Select>
			</FormControl>
		</div>
	);
};

export default MultiSelectFilterDD;
