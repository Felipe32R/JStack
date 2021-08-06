import styled from 'styled-components';

export const Overlay = styled.div`

  background: rgba(0 ,0 ,0 ,0.6);
  backdrop-filter: blur(3px);
  position: absolute;
  width: 100%;
  height: 100%;
  top:0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  width: 100%;
  max-width: 450px;
  height: 200px;
  box-shadow: -12px -12px  rgba(234,101,80,0.4);
`;
