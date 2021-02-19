import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  @media screen and (min-width: 1024px) {
    padding: 50px;
  }
`;

export default Container;
