import { Container, Flex, Stack } from "@chakra-ui/react";
import Days from "./components/calculate/Days";
import Time from "./components/calculate/Time";
import Months from "./components/calculate/Months";
import Cards from "./components/Cards";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <Container
        pt={20}
        as={motion.div}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Stack spacing={20}>
          <Flex className="Information-time" justifyContent={"space-around"}>
            <Days />
            <Months />
            <Time />
          </Flex>
          <Cards />
        </Stack>
      </Container>
    </AnimatePresence>
  );
}

export default App;
