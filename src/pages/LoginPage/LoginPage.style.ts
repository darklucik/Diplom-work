import styled from "styled-components";

export const StyleLoginPage = styled.div`
  box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.elemsBgc};
  margin: 0 auto;
  width: 80%;
  max-width: 500px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  padding: 40px;

  h1 {
    margin-bottom: 50px;
  }

  input {
    
    display: block;
    max-width: 470px;
    width: 100%;
    border-radius: 12px;
    border: 1px solid white;
    background-color: transparent;


    &:is(:hover, :focus) {
      border-color: ${(props) => props.theme.colors.primeColor};
    }
  }

  .textLogin {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid ${(props) => props.theme.colors.lightGray};

    span {
      display: inline-block;
      font-size: 16px;
      margin-bottom: 40px;

      a {
        display: inline;
        color: ${(props) => props.theme.colors.primeColor};
      }
    }

    p {
      margin-bottom: 30px;
    }
  }

  a {
    display: inline-block;
    width: 100%;
    text-align: right;
    text-decoration: none;
    color: ${(props) => props.theme.colors.gray};

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 530px) {
    .LoginPage {
      width: 100%;
    }
  }
`;
