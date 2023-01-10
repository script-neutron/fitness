import { Box, Stack, Typography } from "@mui/material";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

function HorizontalScrollbar({
  data,
  bodyPart,
  setBodyPart,
  isBodyParts,
}: any) {
  return (
    <Stack
      direction={"row"}
      sx={{
        overflowX: "scroll",
        overflowY: "hidden",
        scrollBehavior: "smooth",
        scrollbarColor: "#000",
        "::-webkit-scrollbar": {
          width: "9px",
        },
        "::-webkit-scrollbar-thumb": {
          background: "red",
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
      }}>
      {data.map((item: String | any) => (
        <Box key={item.id || item} m="0 40px">
          {isBodyParts ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </Stack>
  );
}

export default HorizontalScrollbar;
