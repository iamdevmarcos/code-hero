import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
`;

export const Area = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const Header = styled.div`
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
`;

export const Content = styled.div`
  margin-top: 40px;
  padding: 0 20px;

  h1 {
    font-family: "PT Sans Caption", sans-serif;
    font-weight: bold;
    font-size: 32px;
    color: var(--text-title);

    margin-bottom: 10px;
  }

  .characterArea {
    margin-bottom: 60px;
  }
`;
