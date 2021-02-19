import styled from "styled-components";
import { theme } from "../../styles/themeColors.js";

const DefaultButton = styled.button`
  background-color: ${theme.backgroundPrimary};
  border: none;
  bottom: 0;
  color: ${theme.whiteColor};
  cursor: pointer;
  padding: 10px;
  position: absolute;
  right: 0;
  text-align: center;
  width: 100%;
  &:hover {
    background-color: ${theme.backgroundSecunday};
    font-weight: 900;
  }
`;

export default DefaultButton;
