import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 30px;
  color: var(--text-title);

  .image {
    width: 200px;
    height: 200px;
    margin: 0 auto;

    margin-bottom: 15px;

    img {
      width: 100%;
      height: 100%;

      border-radius: 5px;
    }
  }

  h2 {
    text-align: center;
  }

  hr {
    margin-bottom: 30px;
  }

  ul {
    list-style: none;

    li {
      font-size: 16px;
      text-align: center;
    }
  }
`;
