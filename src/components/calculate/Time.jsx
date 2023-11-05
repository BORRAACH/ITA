import { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

const Time = () => {
  const [hoursRemaining, setHoursRemaining] = useState(null);
  const [secondsRemaining, setSecondsRemaining] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const targetDate = new Date("2029-10-01");
      const differenceInSeconds = Math.floor((targetDate - currentDate) / 1000);

      const hoursRemaining = Math.floor(differenceInSeconds / 3600);
      const secondsRemaining = differenceInSeconds % 60;

      setHoursRemaining(hoursRemaining);
      setSecondsRemaining(secondsRemaining);
    }, 1000);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <Box className="Time">
      {hoursRemaining !== null && secondsRemaining !== null && (
        <>
          <Text>Horas</Text>
          <Text fontSize={"4xl"}> {hoursRemaining}</Text>

          <Text>Segundos</Text>
          <Text fontSize={"4xl"}>{secondsRemaining}</Text>
        </>
      )}
    </Box>
  );
};

export default Time;
