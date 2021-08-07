import styled, { css } from 'styled-components';

export default styled.button`
  border: 0;
  background: ${({ theme }) => theme.colors.primary.main};
  box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.4);
  height: 52px;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;

  transition: background 0.1s ease;

  &:hover{
    background: ${({ theme }) => theme.colors.primary.light};
  }
  &:active{
    background: ${({ theme }) => theme.colors.primary.dark};
  }
  &[disabled]{
    background: #ccc;
    cursor: default;
  }

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger.main};

    &:hover{
    background: ${theme.colors.danger.light};
  }
    &:active{
      background: ${theme.colors.danger.dark};
    }
  `}
`;
