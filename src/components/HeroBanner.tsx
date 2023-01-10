import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { GiConvergenceTarget } from "../assets/icons";
//@ts-ignore
import Banner from "../assets/images/banner.png";

type Props = {};

function HeroBanner({}: Props) {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px">
      <Typography color="#ff2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
        }}
        mt="20px"
        mb="20px">
        Fitness is a journey, <br /> not a destination.
      </Typography>
      <Typography
        sx={{
          fontSize: "22px",
          lineHeight: "35px",
        }}
        variant="subtitle1"
        mb={2}>
        Move it to improve it.
      </Typography>
      <Button
        href="#exercises"
        variant="contained"
        endIcon={<GiConvergenceTarget />}
        color="error"
        sx={{ p: 1, backgroundColor: "#ff2625" }}>
        Explore Exsecises
      </Button>
      <Typography
        fontWeight={500}
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px">
        Exercise
      </Typography>
      <img src={Banner} alt="banner" className="hero-banner-img" />
    </Box>
  );
}

export default HeroBanner;
