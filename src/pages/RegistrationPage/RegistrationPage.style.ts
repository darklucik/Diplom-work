import styled from "styled-components";

export const StyledRegistrationPage = styled.div`
  box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.elemsBgc};
  margin: 0 auto;
  width: 80%;
  max-width: 500px;
  text-align: center;
  padding: 40px;
  font-family: Arial, Helvetica, sans-serif;

  h1 {
    margin-bottom: 50px;
  }
  input {
    width: 100%;
    max-width: 420px;
    border-radius: 12px;
    border: 1px solid white;
  }
  .InputContainer {
    margin-bottom: 20px;
  }

  a {
    display: inline-block;
    width: 100%;
    text-align: right;
    text-decoration: none;
    color: var(--gray);

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 530px) {
    width: 100%;
  }
`;
