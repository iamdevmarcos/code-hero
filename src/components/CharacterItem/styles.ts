import styled from "styled-components";

export const Container = styled.tr`
  background: #fff;
  box-shadow: 0px 0px 5px #00000033;

  td {
    padding: 16px 32px;

    &.characterName {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      div {
        width: 52px;
        height: 52px;

        margin-right: 20px;

        img {
          width: 100%;
        }
      }

      strong {
        font-size: 16px;
        color: #555555;
      }
    }

    &.characterSeries,
    &.characterEvents {
      ul {
        list-style: none;
      }

      li {
        color: #555;
        font-size: 14px;
      }
    }
  }
`;
