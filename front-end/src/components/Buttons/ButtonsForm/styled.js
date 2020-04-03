import styled from 'styled-components';

export const ButtonCancel = styled.button.attrs((props) => ({
  type: props.type,
}))`
  padding: 8px 18px;
  color: #fff;
  background: #e03b3b;
  border: 0;
  border-radius: 4px;
  transition: all 0.5s;

  &:hover {
    background: #bb2e2e;
  }
`;

export const ButtonSave = styled.button.attrs((props) => ({
  type: props.type,
}))`
  padding: 8px 18px;
  color: #fff;
  background: #4da14d;
  border: 0;
  border-radius: 4px;
  transition: all 0.5s;

  &:hover {
    background: #387438;
  }
`;
