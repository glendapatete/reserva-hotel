import styled from "styled-components";
import { theme } from "../../styles/themeColors.js";

export const HotelContainer = styled.li`
  border: 1px solid ${theme.lineColor};
  width: 100%;
  position: relative;
  min-height: 585px;
  margin-bottom: 15px;
  transition: all 0.4s;
  &:hover {
    webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
    box-shadow: 0 12px 20px rgba(68, 68, 68, 0.2);
  }
  @media screen and (min-width: 769px) {
    margin-bottom: 20px;
    width: 32%;
  }
`;

export const HotelInfo = styled.div`
  padding: 30px;
`;

export const Flex = styled.div`
  display: flex;
`;
