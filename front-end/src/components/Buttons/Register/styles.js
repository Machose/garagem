import styled from 'styled-components';

const RegisterButton = styled.button`
  margin-top: 30px;
  background-image: linear-gradient(to right, #217770, #42b9af, #217770);
  background-size: 200%;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  transition: 0.5s;
  cursor: pointer;
  text-transform: uppercase;
  color: #fff;
  font-size: 16px;

  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;

  &:hover {
    background-position: right;
  }

  svg {
    transition: all 0.5s;
    transform: rotate(0deg);
    margin-right: 10px;
  }

  &:hover svg {
    transform: rotate(90deg);
  }
`;

export default RegisterButton;
