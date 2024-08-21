import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 2rem;
  border: none;
  width: 8rem;
  height: 8rem;
  border-radius: 10px;
  box-shadow: 3px 7px ${(props) => props.theme.colors.gray};
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;
`
