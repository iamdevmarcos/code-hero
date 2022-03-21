import styled from "styled-components";

export const Container = styled.div`
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

  @media (max-width: 550px) {
    h1 {
      text-align: center;
      font-size: 28px;
    }

    div {
      align-items: center;

      input {
        width: 150px;
      }
    }
  }
`;
