import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import {
  GiConvergenceTarget,
  BiBody,
  GiWeightLiftingUp,
} from "../assets/icons";

function Detail({ exerciseDetail }: any) {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BiBody,
      name: bodyPart,
    },
    {
      icon: GiConvergenceTarget,
      name: target,
    },
    {
      icon: GiWeightLiftingUp,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3" textTransform={"capitalize"}>
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keeps you healthy. {name} is one of the best exercise to
          target your {target}.
        </Typography>
        {extraDetail.map((item, index) => (
          <Stack key={index} direction="row" gap="27px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}>
              <item.icon style={{ width: "75px", height: "75px" }} />
            </Button>
            <Typography variant="h5" textTransform={"capitalize"}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default Detail;
