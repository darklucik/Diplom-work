import styled from "styled-components";

export const StyledMenu = styled.div`
  display: flex;
  box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
  background-color: #bdf;
  overflow-y: hidden;

  color: ${(props) => props.theme.colors.textColor};
  margin-bottom: 20px;

  .menu {
    display: flex;
    padding: 0;
    margin: auto;
    /* flex-direction: column; */
    gap: 15px;
  }

  .menuName {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 20px;
    color: #3c4a63;
    padding: 10px 15px;
    list-style: none;
    transition: 200ms;

    .name {
      flex: 1 1 auto;
      font-family: Arial, Helvetica, sans-serif;
      background-color: transparent;
      text-decoration: none;

      font-size: 24px;

      @media (max-width: 769px) {
        font-size: 17px;
      }
    }
    a {
      color: #3c4a63;
      &:hover {
        background-color: ${(props) => props.theme.colors.primeColor};
        color: white;
      }
    }

    &:hover {
      background-color: ${(props) => props.theme.colors.primeColor};
      color: white;
    }

    &:active {
      transition: 100ms;
      background-color: ${(props) => props.theme.colors.primeColor};
      color: white;
    }
    @media (max-width: 769px) {
      padding: 0 10px;
      margin: 0 10px;
    }
  }

  @media (max-width: 769px) {
    height: 50px;
    font-size: 17px;
  }

  /* @media (max-width: 1100px) {
    .menuName {
      display: inline-block;

      .name {
        display: none;
      }
    }
  } */

  /* display: flex;
  align-items: center;
  background-color: #bdf;
  overflow-y: hidden;
  font-family: Arial, Helvetica, sans-serif;
  height: 65px;
  .menuName {
    padding: 0 15px;
    margin: 0 10px;
    p {
      font-family: Arial, Helvetica, sans-serif;
      background-color: transparent;
      text-decoration: none;
      font-size: 24px;
      color: #3c4a63;
      margin: 0;

      @media (max-width: 769px) {
        font-size: 17px;
      }
    }

    @media (max-width: 769px) {
      padding: 0 10px;
      margin: 0 10px;
    }
  }

  @media (max-width: 769px) {
    height: 50px;
    font-size: 17px;
  } */
`;
