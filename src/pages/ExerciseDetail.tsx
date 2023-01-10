import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";
import { exerciseOptions, fetchData } from "utils/fetechData";
import Detail from "components/Detail";
import ExerciseVideos from "components/ExerciseVideos";
import SimilarExercises from "components/SimilarExercises";

function ExerciseDetail() {
  const [exerciseDetail, setexerciseDetail] = useState<any>({});
  const [targetMuscleExercise, setTargetMuscleExercise] = useState<any>([]);
  const [equipmentExercise, setEquipmentExercise] = useState<any>([]);
  const { id } = useParams();
  console.log(exerciseDetail);

  useEffect(() => {
    const fetchExerciesData = async () => {
      const execiseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      const exerciseDetailData = await fetchData(
        `${execiseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setexerciseDetail(exerciseDetailData);

      const targetMuscleExerciseData = await fetchData(
        `${execiseDbUrl}/exercises/target/${exerciseDetail.target}`,
        exerciseOptions
      );
      setTargetMuscleExercise(targetMuscleExerciseData);
      const equipmentExerciseData = await fetchData(
        `${execiseDbUrl}/exercises/equipment/${exerciseDetail.equipment}`,
        exerciseOptions
      );

      setEquipmentExercise(equipmentExerciseData);
    };
    fetchExerciesData();
  }, [exerciseDetail.equipment, exerciseDetail.target, id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises
        targetMuscleExercise={targetMuscleExercise}
        equipmentExercise={equipmentExercise}
      />
    </Box>
  );
}

export default ExerciseDetail;
