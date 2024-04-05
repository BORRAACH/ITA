import { Divider, Flex, Heading, Stack } from "@chakra-ui/react";
import Days from "./Days";
import Months from "./Months";
import Time from "./Time";
import Percent from "./Percent";

export default function EvaluationDays({ date }) {
  return (
    <Stack spacing={10} mt={10}>
      <Divider orientation="horizontal" />
      <Heading>Prova desse ano:</Heading>
      <Flex justifyContent={"space-between"}>
        <Days date={date} />
        <Months date={date} />
        <Time date={date} />
      </Flex>
    </Stack>
  );
}
