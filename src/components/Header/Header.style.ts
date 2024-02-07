import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
  ._dark {
    background-color: rgb(42, 48, 56);
  }

  .headerTittle {
    margin: 0;
    color: #666;

    @media (max-width: 769px) {
      display: none;
    }
  }

  .inputAndreagister {
    display: flex;
    align-items: center;
    .theme {

      button {
        border-radius: 12px;
        padding: 18px;
        display: flex;
        margin-right: 15px;
        background: #bdf;
        &:hover {
          background-color: ${(props) => props.theme.colors.primeColor};
          color: white;
          border-color: ${(props) => props.theme.colors.primeColor};
          

        }

        &:active {
          transition: 100ms;
          background-color: ${(props) => props.theme.colors.primeColor};
          color: white;
          border-color: ${(props) => props.theme.colors.primeColor};
        }
      }
    }

    .search {
      display: flex;
      align-items: center;

      input {
        padding: 0 0 0 10px;
        max-width: 151px;
        width: 100%;
        height: 24px;
        border: 1px solid #dbdbdb;
        color: #495057;
        background-color: #fff;
        outline-color: #666;
      }

      .searchBtn {
        border: 1px solid #dbdbdb;
        height: 25.4px;
        background-color: #fff;

        img {
          width: 11px;
          height: 13px;
        }
        &:hover {
          background-color: ${(props) => props.theme.colors.lightGray};
          color: white;
        }
        &:active {
          transition: 100ms;
          background-color: ${(props) => props.theme.colors.darkColor};
          color: white;
        }
      }
    }

    .time {
    }
    .profileIcon {
      padding-left: 20px;

      a {
        color: #06c;
        background-color: transparent;
        text-decoration: none;

        img {
          width: 38px;
          transition: 200ms;
          border-radius: 50%;
          object-fit: cover;

          &:hover {
            scale: 1.3;
          }

          &:active {
            scale: 0.9;
            transition: 100ms;
          }
        }
      }
    }
  }
`;
