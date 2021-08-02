import styled from 'styled-components';

export const Container = styled.footer`
  background: ${({theme}) => theme.footerBackgroundColor};

  height: 70px;
  display: flex;
  position: absolute;
  bottom: 5px;

  width: 95.3%;
  
  align-items: center;
  padding: 0 24px;
  border-radius: 10px;
  justify-content: space-between;
  margin-top: 24px;
  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;