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

  .searchArea {
    margin-bottom: 40px;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      .searchInput {
        flex-direction: row;
        align-items: center;
        justify-content: center;

        button {
          padding: 10px;
          margin-left: 10px;

          background: var(--background-white);
          border: 0;
          outline: 0;
          border: 1px solid transparent;
          border-radius: 5px;

          cursor: pointer;

          &:hover {
            opacity: 0.5;
          }
        }
      }

      h2 {
        font-size: 18px;
        color: var(--text-title);

        margin-bottom: 10px;
      }

      input {
        padding: 10px 15px;
        width: 300px;

        background: var(--background-white);
        outline: 0;
        border: 1px solid transparent;
        border-radius: 5px;

        color: #8e8e8e;
        font-size: 14px;
        font-style: italic;

        transition: all ease-in 0.2s;

        &:hover,
        &:focus {
          border: 1px solid #555;
        }
      }
    }
  }

  .characterArea {
    margin-bottom: 60px;
  }
`;
