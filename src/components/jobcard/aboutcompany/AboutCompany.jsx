import { Box, Link, Typography } from "@mui/material";
import React from "react";

const AboutCompany = ({ jobDetailsFromCompany, jdLink }) => {
	return (
		<Box marginTop={2} marginBottom={2}>
			<Typography variant="body1">About Company:</Typography>
			<Box
				height={"227px"}
				overflow={"hidden"}
				sx={{
					WebkitMaskImage:
						"linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(232,232,232,1) 100%)",
					WebkitMask:
						"linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(232,232,232,1) 100%)",
				}}
			>
				<Typography variant="body2" fontWeight={600}>
					About us
				</Typography>
				<Typography
					lineHeight={1.1}
					variant="body2"
					fontSize={14}
					fontWeight={300}
				>
					{jobDetailsFromCompany}
				</Typography>
				<Typography variant="body2" fontWeight={600}>
					Founders/Recruiters Profile:
				</Typography>
				<Link href="#">Imo Nadeem</Link>
			</Box>
			<Box textAlign={"center"}>
				<Typography variant="body2" fontWeight={300}>
					<Link href={jdLink}>View Job</Link>
				</Typography>
			</Box>
		</Box>
	);
};

export default AboutCompany;
