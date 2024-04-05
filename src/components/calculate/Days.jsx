import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Days({ date }) {
  const [daysRemaining, setDaysRemaining] = useState(null);

  useEffect(() => {
    // Obtém a data atual
    const currentDate = new Date();

    // Define a data de 01/10/2029
    const targetDate = new Date(date);

    // Calcula a diferença em milissegundos
    const differenceInMilliseconds = targetDate - currentDate;

    // Converte a diferença para dias
    const daysDifference = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24)
    );

    // Define o número de dias restantes no estado
    setDaysRemaining(daysDifference);
  }, []);

  return (
    <Box className="Days">
      {daysRemaining !== null && (
        <>
          <Text fontSize={"xl"}>Dias</Text>
          <Text fontSize={"6xl"}>{daysRemaining} </Text>
        </>
      )}
    </Box>
  );
}
