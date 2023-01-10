import { useEffect, useState } from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { exerciseOptions, fetchData } from "utils/fetechData";
import HorizontalScrollbar from "./HorizontalScrollbar";

type Props = {};
interface Exercise {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}

export default function SearchExercises({
  setExercises,
  bodyPart,
  setBodyPart,
}: any) {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState<String[]>();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`,
        exerciseOptions
      );
      setBodyParts(bodyPartsData);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises`,
        exerciseOptions
      );
      const searchExercises = exercisesData.filter(
        (exercise: Exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchExercises);
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center">
        The body achieves what <br />
        the mind believes.
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: 700,
              border: "none",
              borderRadius: "4px",
              backgroundColor: "#fff",
            },
            width: { lg: "800px", md: "500px", xs: "350px" },
            borderRadius: "40px",
          }}
          value={search}
          placeholder="Search Exercises"
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
        />
        <Button
          className="search-btn"
          onClick={handleSearch}
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: 0,
          }}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        {bodyParts !== undefined && (
          <HorizontalScrollbar
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            isBodyParts
          />
        )}
      </Box>
    </Stack>
  );
}
