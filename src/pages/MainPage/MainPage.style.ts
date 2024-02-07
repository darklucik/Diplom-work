import styled from "styled-components";

export const StyledMainPage = styled.div`
  padding: 0 0.75rem;
  padding-bottom: 1rem;
  font-family: Arial, Helvetica, sans-serif;

  .listTitle {
    background-color: #f8f8f8;
    height: 50px;
    margin: 0-12px 16px;

    h1 {
      padding: 15px 16px;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 0.9375rem;
      text-transform: uppercase;
      font-weight: bold;
      margin: 0;
    }
  }
  .recommendations {
    .recommendationTitle {
      display: flex;
      align-items: center;
      background-color: #bdf;
      max-width: 177px;
      font-weight: 700;
      text-align: center;

      .tabFootball {
        /* background-color: #bdf; */
        color: #3c4a63;
        padding: 0 8px;
        height: 65px;

        cursor: pointer;

        p {
          font-family: Arial, Helvetica, sans-serif;

          @media (min-width: 769px) {
            margin: 23px 0;
          }
        }

        @media (max-width: 769px) {
          height: 50px;
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
    .league {
    }
    .matchs {
      display: flex;
      padding-top: 20px;
      flex-direction: column;
    }
    .matchTwo {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
  }
`;
