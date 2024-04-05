import { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

const Months = ({ date }) => {
  const [monthsRemaining, setMonthsRemaining] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    const targetDate = new Date(date);

    // Calcula a diferença em meses
    const monthsDifference =
      targetDate.getMonth() -
      currentDate.getMonth() +
      12 * (targetDate.getFullYear() - currentDate.getFullYear());

    setMonthsRemaining(monthsDifference);
  }, []);

  return (
    <Box className="Months">
      {monthsRemaining !== null && (
        <>
          <Text fontSize={"xl"}>Meses</Text>
          <Text fontSize={"6xl"}>{monthsRemaining}</Text>
        </>
      )}
    </Box>
  );
};

export default Months;
