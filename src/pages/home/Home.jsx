import { Box, Container, Stack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "src/components/Header/Sidebar.jsx";
import Generalinformations from "../../components/GeneralInformations";
import EvaluationDays from "../../components/calculate/EvaluationDays";

function TimeData() {
  return (
    <AnimatePresence>
      <Container
        pt={20}
        maxW={"2xl"}
        as={motion.div}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Stack spacing={10}>
          <Generalinformations date={"2029-10-01"} />
          <EvaluationDays date={"2024-10-13"} />
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
