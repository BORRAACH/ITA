import { Box, Container, Flex, Grid, Stack, Text } from "@chakra-ui/react";
import Days from "./components/calculate/Days";
import Time from "./components/calculate/Time";
import Months from "./components/calculate/Months";
import Cards from "./components/Cards";
import { AnimatePresence, motion } from "framer-motion";
import SearchBar from "./components/SearchBar";
import Percent from "./components/actualyYear/percent";

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
          <Box>
            <Percent />
          </Box>
          <SearchBar />
        </Stack>
      </Container>
    </AnimatePresence>
  );
}

export default App;
