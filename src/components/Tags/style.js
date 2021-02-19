import styled from "styled-components";
import { theme } from "../../styles/themeColors.js";

export const TagInfo = styled.span`
  background-color: ${theme.lineColor};
  border-radius: 0px 3px 3px 0px;
  padding: 8px;
`;

export const TagIcon = styled.span`
  background-color: ${theme.backgroundSecunday};
  border-radius: 3px 0px 0px 3px;
  color: ${theme.whiteColor};
  padding: 8px;
  &:last-child {
    border-radius: 3px;
  }
`;

export const TagContent = styled.div`
  margin-bottom: 25px;
  margin-right: 15px;
`;
