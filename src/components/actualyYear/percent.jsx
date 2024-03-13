import { Box, Heading, Text } from "@chakra-ui/react";
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
    setValue(calculate);
  }, []);

  return (
    <Box>
      <Heading>Progresso do ano: </Heading>
      {value && <Text fontSize={"4xl"}>{value}%</Text>}
    </Box>
  );
}
