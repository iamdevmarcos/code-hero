import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
`;

export const Area = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;
export const Header = styled.div`
  background: #fff;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .leftSide {
    width: 96px;
    height: 24px;

    img {
      width: 100%;
    }
  }

  .rightSide {
    font-family: "PT Sans Caption", sans-serif;
    font-size: 14px;
    color: #555;
  }
`;

export const Content = styled.div`
  margin-top: 40px;

  h1 {
    font-family: "PT Sans Caption", sans-serif;
    font-weight: bold;
    font-size: 32px;
    color: #555;

    margin-bottom: 10px;
  }

  .searchArea {
    margin-bottom: 40px;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      h2 {
        font-size: 18px;
        color: #555;

        margin-bottom: 10px;
      }

      input {
        padding: 10px 15px;
        width: 300px;

        background: #fff;
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
