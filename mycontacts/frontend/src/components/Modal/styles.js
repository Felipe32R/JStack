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
  box-shadow: 8px 8px 6px  RGBA(0, 0, 0, 0.3);

  h1{
    font-size: 24px;
    color: ${({ theme, danger }) => (
    danger ? theme.colors.danger.main : theme.colors.gray[900]
  )};
  }
  p{
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button{
    background: transparent;
    border: none;
    font-size: 16px;
    margin-right: 16px;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
