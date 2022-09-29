import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 50px;
  background-color: blue;
  
`;
export const Form = styled.form`
  position: absolute;
  margin-top: 5px;
  padding-top: 3px;
  transform: translate(-50%, 0%);
  left: 50%;
`;
export const Input = styled.input`
  height: 20px;

`;
export const Button = styled.button`
  padding: 4px 10px;
  margin-left: 5px;
  cursor: pointer;
  border-radius: 5px;
  :hover {
    background-color: #4d4dbb;
  }
`;