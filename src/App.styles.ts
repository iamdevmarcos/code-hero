import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
`;

export const Area = styled.div`
  max-width: 1000px;
  margin: 0 auto;
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

export const Pagination = styled.div`
  width: 100%;
  background-color: #fff;
  position: relative;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  div {
    width: 40px;
    height: 32px;
    margin: 0 10px;
    background: #e5e5e5;
    font-size: 14px;
    color: var(--text-title);

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 5px;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }

    &.active {
      background: #1d252c;
      color: #fff;
    }
  }
`;
