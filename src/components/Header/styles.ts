import styled from "styled-components";

export const Container = styled.header`
  background: var(--background-white);
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .leftSide {
    width: 96px;
    height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
    }
  }

  .rightSide {
    font-family: "PT Sans Caption", sans-serif;
    font-size: 14px;
    color: var(--text-title);
  }

  @media (max-width: 550px) {
    .rightSide {
      font-size: 10px;
    }
  }
`;
