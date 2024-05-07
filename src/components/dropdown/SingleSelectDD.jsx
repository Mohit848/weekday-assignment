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

const SingleSelectDD = ({
	children,
	placeholder,
	options,
	handleFilterUpdate,
	suffixText,
	name,
}) => {
	const [selectedOption, setSelectedOption] = useState("");

	const handleChange = (event) => {
		setSelectedOption(event.target.value);
	};

	useEffect(() => {
		handleFilterUpdate(name, [], selectedOption);
	}, [selectedOption, name]);

	return (
		<div>
			<FormControl sx={{ m: 1, width: "190px", flexWrap: "wrap" }}>
				<InputLabel
					sx={{ fontSize: "15px", fontFamily: "Lexend" }}
					id="single-select-label"
				>
					{placeholder}
				</InputLabel>
				<Select
					sx={{ fontFamily: "Lexend", fontSize: "14px" }}
					labelId="single-select-label"
					label={placeholder}
					name={placeholder}
					id="single-select"
					value={selectedOption}
					onChange={handleChange}
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

export default SingleSelectDD;
