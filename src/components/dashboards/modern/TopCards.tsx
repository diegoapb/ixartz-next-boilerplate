import Image from "next/image";
import { Box, CardContent, Grid, Typography } from "@mui/material";

import icon1 from "public/images/svgs/icon-connect.svg";
import icon2 from "public/images/svgs/icon-user-male.svg";
import icon3 from "public/images/svgs/icon-briefcase.svg";
import icon4 from "public/images/svgs/icon-mailbox.svg";
import icon5 from "public/images/svgs/icon-favorites.svg";
import icon6 from "public/images/svgs/icon-speech-bubble.svg";

const topcards = [
  {
    icon: icon2,
    title: "Employees",
    digits: "96",
    bgcolor: "primary",
  },
  {
    icon: icon3,
    title: "Clients",
    digits: "3,650",
    bgcolor: "warning",
  },
  {
    icon: icon4,
    title: "Projects",
    digits: "356",
    bgcolor: "secondary",
  },
  {
    icon: icon5,
    title: "Events",
    digits: "696",
    bgcolor: "error",
  },
  {
    icon: icon6,
    title: "Payroll",
    digits: "$96k",
    bgcolor: "success",
  },
  {
    icon: icon1,
    title: "Reports",
    digits: "59",
    bgcolor: "info",
  },
];

const TopCards = () => {
  return (
    <Grid container spacing={3} mt={3}>
      {topcards.map((topcard, i) => (
        <Grid item xs={12} sm={4} lg={2} key={i}>
          <Box bgcolor={topcard.bgcolor + ".light"} textAlign="center">
            <CardContent>
              <Image src={topcard.icon} alt={"topcard.icon"} width="50" height="50" />
              <Typography
                color={topcard.bgcolor + ".main"}
                mt={1}
                variant="subtitle1"
                fontWeight={600}
              >
                {topcard.title}
              </Typography>
              <Typography
                color={topcard.bgcolor + ".main"}
                variant="h4"
                fontWeight={600}
              >
                {topcard.digits}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopCards;
