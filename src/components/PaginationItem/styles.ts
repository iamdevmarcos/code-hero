import styled from "styled-components";

export const Container = styled.div`
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
`;
