import Sidebar from "src/components/Header/Sidebar.jsx";
import { Box, Container, Flex, Stack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Percent from "src/components/calculate/percent";
import Days from "src/components/calculate/Days";
import Months from "src/components/calculate/Months";
import Time from "src/components/calculate/Time";

function TimeData() {
  return (
    <AnimatePresence>
      <Container
        pt={20}
        maxW={"xl"}
        as={motion.div}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Stack spacing={20}>
          <Flex className="Information-time" justifyContent={"space-around"}>
            <Days p={5} BorderRadius={"md"} />
            <Months />
            <Time />
          </Flex>
          <Box>
            <Percent />
          </Box>
        </Stack>
      </Container>
    </AnimatePresence>
  );
}

export default function Home() {
  return (
    <Box>
      <Sidebar />
      <TimeData />
    </Box>
  );
}
