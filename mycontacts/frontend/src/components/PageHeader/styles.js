import styled from 'styled-components';

export const Container = styled.header`

  a{
    text-decoration: none;
    display: flex;
    align-items:center;
    span{
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }

    img{
      margin-right: 8px;
      transform: rotate(-90deg);
    }
  }

  h1{
    margin-top:8px;
    font-size: 24px;
  }
`;
