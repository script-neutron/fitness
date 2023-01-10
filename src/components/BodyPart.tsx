import React from "react";
import { Stack, Typography } from "@mui/material";
//@ts-ignore
import { CgGym } from "../assets/icons";

type Props = {};

function BodyPart({ item, setBodyPart, bodyPart }: any) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}>
      <CgGym style={{ width: "200px", height: "200px" }} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize">
        {" "}
        {item}
      </Typography>
    </Stack>
  );
}

export default BodyPart;
