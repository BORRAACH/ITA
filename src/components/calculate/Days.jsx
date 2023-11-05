import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Days = function () {
  const [daysRemaining, setDaysRemaining] = useState(null);

  useEffect(() => {
    // Obtém a data atual
    const currentDate = new Date();

    // Define a data de 01/10/2029
    const targetDate = new Date("2029-10-01");

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
          <Text>Dias</Text>
          <Text fontSize={"4xl"}>{daysRemaining} </Text>
        </>
      )}
    </Box>
  );
};

export default Days;
