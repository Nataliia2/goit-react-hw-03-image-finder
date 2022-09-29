import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(211, 211, 211, 0.5);
  align-items: center;
`;
export const Modals = styled.div`
  position: absolute;
  width: 800px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 10px;
`;
export const ModalImg = styled.img`
  display: block;
  width: 900px;
  height: 700px;
  cursor: pointer;
  border-radius: 10px;
`;