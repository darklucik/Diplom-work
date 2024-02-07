import styled from "styled-components";

export const StyledProfilePage = styled.div`
  box-shadow: 0 0 10px #e3e3e3;
  border-radius: 20px;
  background-color: #fff;
  margin: 100px auto 0;
  width: 100%;
  max-width: 800px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  padding: 40px;
  .info {
    text-align: start;
    .name {
      border-bottom: 1px solid #e3e3e3;
    }
    .email {
      border-bottom: 1px solid #e3e3e3;
    }
  }
  .Btn {
    display: flex;
    align-items: center;
    padding-top: 20px;
    flex-direction: row-reverse;
    gap: 10px;

    .submit {
      max-width: 180px;
      width: 100%;
      margin-top: 20px;
      button {
        cursor: pointer;
        padding: 12px 15px;
        font-size: inherit;
        transition: 200ms;
        width: 100%;
        border: 1px solid transparent;
        outline: 0;
        font-family: inherit;
        background-color: #3c4a63;
        color: white;
        &:hover {
          background: ${(props) => props.theme.colors.bdf};
          color: ${(props) => props.theme.colors.primeColor};
        }

        &:active {
          transition: 100ms;
          background: ${(props) => props.theme.colors.bdf};
          color: ${(props) => props.theme.colors.primeColor};
        }
      }
    }
    .logout {
      max-width: 90px;
      width: 100%;
      button {
        cursor: pointer;
        padding: 12px 15px;
        font-size: inherit;
        transition: 200ms;
        width: 100%;
        border: 1px solid transparent;
        outline: 0;
        font-family: inherit;
        background-color: #3c4a63;
        color: white;
        &:hover {
          background: ${(props) => props.theme.colors.bdf};
          color: ${(props) => props.theme.colors.primeColor};
        }

        &:active {
          transition: 100ms;
          background: ${(props) => props.theme.colors.bdf};
          color: ${(props) => props.theme.colors.primeColor};
        }
      }
    }
  }
`;
