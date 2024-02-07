import styled, { css } from "styled-components";

interface IStyledMatchProps {
  $isLiked?: boolean;
  $isMarked?: boolean;
}

export const StyledMatch = styled.div<IStyledMatchProps>`
  flex-grow: 1;
  padding: 10px 20px 20px 0;
  .h2h {
    display: flex;
    align-items: center;
    max-width: 555px;
    height: 30px;
    width: 100%;
    justify-content: space-evenly;
    border-bottom: 1px solid #dbdbdb;

    .save {
      background: none;
      border: none;

      .star-icon {
        font-size: 2em;
        color: grey;
        transition: color 0.3s;
        cursor: pointer;
      }
      .star-icon:hover {
        color: yellow;
      }
      .star-icon:active {
        color: yellow;
      }
    }
    .addToFavoritesBtn{
      height: 30px;
    }
    .goals {
      font-size: 18px;
      padding: 0 10px;
      margin: 0;
      color: blue;
    }
    p {
      font-size: 18px;
      padding: 0 10px;
      margin: 0;
    }
    img {
      max-width: 20px;
      width: 100%;
    }
    
    .CardBtn {
      height: 50px;
      padding: 10px;
      gap: 5px;
    }


    .status {
      color: red;
    }
    &:hover {
      background-color: ${(props) => props.theme.colors.lightGray};
      color: #3c4a63;
    }
  }

  
 
`;
