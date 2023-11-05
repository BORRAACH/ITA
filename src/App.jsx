import { Container, Flex } from "@chakra-ui/react";
import Days from "./components/calculate/Days";
import Time from "./components/calculate/Time";

function App() {
  return (
    <Container pt={10}>
      <Flex justifyContent={"space-around"}>
        <Days />
        <Time />
      </Flex>
    </Container>
  );
}

export default App;
