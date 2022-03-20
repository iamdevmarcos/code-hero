import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-spacing: 0 15px;

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    td {
      &.characterSeries,
      &.characterEvents {
        display: none;
      }
    }
  }

  th {
    color: #8e8e8e;
    font-size: 14px;
    text-align: left;

    padding: 12px 32px;

    @media (max-width: 550px) {
      display: none;

      &:first-child {
        display: block;
        text-align: center;
      }
    }
  }
`;
