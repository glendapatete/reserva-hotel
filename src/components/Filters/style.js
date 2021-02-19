import styled from "styled-components";
import { theme } from "../../styles/themeColors.js";

export const FilterStyle = styled.section`
  background-color: ${theme.backgroundSecunday};
  color: ${theme.whiteColor};
  display: flex;
  flex-wrap: wrap;
  padding: 10px 50px;
  span {
    position: relative;
    width: 100%;
    margin-right: 10px;
    svg {
      position: absolute;
      color: ${theme.lineColor};
      margin: 10px;
    }
    &:hover {
      svg {
        color: ${theme.backgroundSecunday};
      }
    }
  }

  @media screen and (min-width: 769px) {
    justify-content: space-between;
    flex-wrap: nowrap;
    margin-bottom: 20px;
    span {
      position: relative;
      width: 20%;
    }
  }
`;

export const Select = styled.select`
  border-radius: 3px;
  background-color: ${theme.whiteColor};
  background-image: linear-gradient(
      60deg,
      transparent 50%,
      ${theme.backgroundPrimary} 50%
    ),
    linear-gradient(-60deg, transparent 50%, ${theme.backgroundPrimary} 50%);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
  height: 35px;
  padding: 0.5em 3.5em 0.5em 2.5em;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;

  @media screen and (min-width: 769px) {
    margin-bottom: 0px;
    &:last-child {
      margin-right: 0px;
    }
  }
`;

export const Input = styled.input`
  height: 35px;
  background: ${theme.whiteColor};
  border-radius: 3px;
  font-size: 14px;
  border: none;
  margin-bottom: 10px;
  padding: 0.5em 0.5em 0.5em 2.5em;
  width: 100%;
  cursor: pointer;
  ::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
  }
  @media screen and (min-width: 769px) {
    margin-bottom: 0px;
  }
`;
