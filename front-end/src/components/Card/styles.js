import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  box-shadow: 0px 0px 5px rgba(1, 1, 1, 0.2);
  border-radius: 5px;
  padding: 50px;
  margin: 50px auto;
  max-width: 80%;

  hr {
    margin: 10px 0 50px;
    border: 0;
    border-bottom: 2px solid #8edfdb;
  }

  &::before {
    background: green;
  }
`;
