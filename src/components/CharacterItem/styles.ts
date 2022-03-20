import styled from "styled-components";

export const Container = styled.tr`
  background: var(--background-white);
  box-shadow: 0px 0px 5px #00000033;
  transition: all ease-in 0.2s;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  td {
    padding: 16px 32px;

    &.characterName {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      div {
        width: 80px;
        height: 80px;

        margin-right: 20px;

        img {
          width: 100%;
          height: 100%;

          border-radius: 10px;
        }
      }

      strong {
        font-size: 16px;
        color: var(--text-title);
      }
    }

    &.characterSeries,
    &.characterEvents {
      ul {
        list-style: none;
      }

      li {
        color: var(--text-title);
        font-size: 14px;

        &.noResult {
          color: #ff0000;
          font-weight: bold;
        }

        @media (max-width: 680px) {
          font-size: 12px;
        }
      }
    }
  }
`;
