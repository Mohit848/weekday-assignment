import { Box, Link, Typography } from "@mui/material";
import React from "react";

const AboutCompany = () => {
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
					This is a sample job and you must have displayed it to
					understand that its not just some random lorem ipsum text
					but something which was manually written. Oh well, if random
					text is what you were looking for then here it is: Lorem
					Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy
					text ever since the 1500s, when an unknown printer took a
					galley of type and scrambled it to make a type specimen
					book. It has survived not only five centuries, but also the
					leap into electronic typesetting, remaining essentially
					unchanged. It was popularised in the 1960s with the release
					of Letraset sheets containing Lorem Ipsum passages and now
					in this assignment.
				</Typography>
				<Typography variant="body2" fontWeight={600}>
					Founders/Recruiters Profile:
				</Typography>
				<Link href="#">Imo Nadeem</Link>
			</Box>
			<Box textAlign={"center"}>
				<Link href="#">
					<Typography variant="body2" fontWeight={300}>
						View Job
					</Typography>
				</Link>
			</Box>
		</Box>
	);
};

export default AboutCompany;
