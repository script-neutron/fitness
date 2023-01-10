import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
//@ts-ignore
import Logo from "../assets/images/logo.png";

type Props = {};

function Navbar({}: Props) {
  return (
    <Stack
      direction={"row"}
      justifyContent="none"
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
        },
        mt: {
          sm: "10px",
          xs: "5px",
        },
      }}
      px="20px">
      <Box flexDirection={"column"}>
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "48px", height: "48px", margin: "0 20px" }}
          />
        </Link>
        <Typography variant="subtitle1" fontWeight={"bold"}>
          Script Dev
        </Typography>
      </Box>
      <Stack direction={"row"} gap="40px" fontSize={"24px"} alignItems="center">
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            color: "#3a1212",
            borderBottom: "2px solid #ff2625",
          }}>
          Home
        </Link>
        <Link
          to={"#exercises"}
          style={{ textDecoration: "none", color: "#3a1212" }}>
          {" "}
          Exercises
        </Link>
      </Stack>
    </Stack>
  );
}

export default Navbar;
