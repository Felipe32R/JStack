import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const InputSearchContainer = styled.div`
  margin-top: 48px;
  width: 100%;
  input{
    width: 100%;
    background: #fff;
    border: none;
    border-radius: 25px;
    height: 50px;
    box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.4);
    outline: 0;
    padding: 0 24px;

    &::placeholder{
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

`;

export const Header = styled.header`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  strong{
    font-size: 24px;
  }

  a{
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover{
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;

  header{

    margin-bottom: 8px;
    button{
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
    }
    span{
      color: ${({ theme }) => theme.colors.primary.main};
      margin-right: 8px;
      font-weight: bold;
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.4);
  padding: 16px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info{
    .contact-name{
      display: flex;
      align-items: center;

      small{
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};;
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span{
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }
  .actions{
    display: flex;
    align-items: center;

    button{
      background: transparent;
      border: 0;
      margin-left: 12px;
    }
  }
`;
