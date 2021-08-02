
import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({theme}) => theme.footerBackgroundColor};
  margin-top: 16px;
  padding: 16px;
  border-radius: 10px;
  

  a{
  color: ${({theme}) => theme.textColor};
  text-decoration: none;
  display: inline-block;

  & + a{
    margin-left: 16px;
  }
  }
`;