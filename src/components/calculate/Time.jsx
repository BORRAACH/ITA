import { useState, useEffect } from "react";
import { Box, Text, HStack } from "@chakra-ui/react";

const Time = ({ date }) => {
  const [hoursRemaining, setHoursRemaining] = useState(null);
  const [secondsRemaining, setSecondsRemaining] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const targetDate = new Date(date);
      const differenceInSeconds = Math.floor((targetDate - currentDate) / 1000);

      const hoursRemaining = Math.floor(differenceInSeconds / 3600);
      const secondsRemaining = differenceInSeconds % 60;

      setHoursRemaining(hoursRemaining);
      setSecondsRemaining(secondsRemaining);
    }, 1000);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <HStack className="Time" spacing={10}>
      {hoursRemaining !== null && secondsRemaining !== null && (
        <>
          <Box>
            <Text fontSize={"xl"}>Horas</Text>
            <Text fontSize={"6xl"}> {hoursRemaining}</Text>
          </Box>

          <Box>
            <Text fontSize={"xl"}>Segundos</Text>
            <Text fontSize={"6xl"}>{secondsRemaining}</Text>
          </Box>
        </>
      )}
    </HStack>
  );
};

export default Time;
