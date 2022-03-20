import React from "react";
import { Container } from "./styles";

const Loading: React.FC = () => {
  return (
    <Container>
      <img
        src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
        alt="Carregando..."
      />
    </Container>
  );
};

export default Loading;
