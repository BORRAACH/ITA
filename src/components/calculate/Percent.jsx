import { Box, Heading, Progress, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const calculate = () => {
  var dataAtual = new Date();
  var primeiroDeJaneiro = new Date(dataAtual.getFullYear(), 0, 1);
  var diferencaEmMilissegundos = dataAtual - primeiroDeJaneiro;
  var diasPassados = Math.floor(
    diferencaEmMilissegundos / (1000 * 60 * 60 * 24)
  );
  var percentual = (diasPassados / 365) * 100;

  return percentual;
};

export default function Percent() {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const calculatedValue = calculate();
    setValue(calculatedValue.toFixed(3));
  }, []);

  return (
    <Stack gap={3}>
      <Text fontSize={"2xl"}>Progresso: </Text>
      <Progress value={value} size="md" borderRadius={5} colorScheme="red" />
      {value && <Text fontSize={"4xl"}>{value}%</Text>}
    </Stack>
  );
}
