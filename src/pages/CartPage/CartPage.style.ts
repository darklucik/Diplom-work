import styled from "styled-components";

export const StyledCartPage = styled.div`
  box-shadow: 0 0 10px #e3e3e3;
  border-radius: 20px;
  background-color: #fff;
  margin: 100px auto 0;
  width: 100%;
  max-width: 800px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  padding: 40px;
  .clearIcon {
    display: flex;
    flex-direction: row-reverse;
    button {
      background: none;

      img {
        height: 20px;
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
    }
  }
  .logos {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .homelogo {
      padding-right: 20px;
      img {
        height: 200px;
      }
    }
    .awaylogo {
      padding-left: 20px;
      img {
        height: 200px;
      }
    }
  }
  .names {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .homename {
    }
    .homeAndaway {
    }
    .awayname {
    }
  }
  .goals {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .homegoal {
    }
    .awaygoal {
    }
  }
`;
