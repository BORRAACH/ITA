import { Flex, Box, Heading, Stack } from "@chakra-ui/react";
import Days from "src/components/calculate/Days";
import Months from "src/components/calculate/Months";
import Time from "src/components/calculate/Time";
import Percent from "src/components/calculate/Percent";

export default function Generalinformations({ date }) {
  return (
    <Stack spacing={10} maxW={"2xl"}>
      <Heading>Todo o tempo restante:</Heading>
      <Flex className="Information-time" justifyContent={"space-between"}>
        <Days date={"2029-10-01"} />
        <Months date={"2029-10-01"} />
        <Time date={"2029-10-01"} />
      </Flex>
      <Percent date={"2029-10-01"} />
    </Stack>
  );
}
