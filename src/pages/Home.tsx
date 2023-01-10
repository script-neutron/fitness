import { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "components/HeroBanner";
import SearchExercises from "components/SearchExercises";
import Exercises from "components/Exercises";

type Props = {};

function Home() {
  const [exercises, setExercises] = useState();
  const [bodyPart, setBodyPart] = useState();
  console.log(bodyPart);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      {exercises !== undefined && (
        <Exercises
          setExercises={setExercises}
          bodyPart={bodyPart}
          exercises={exercises}
        />
      )}
    </Box>
  );
}

export default Home;
