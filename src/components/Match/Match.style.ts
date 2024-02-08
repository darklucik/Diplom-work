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
    justify-content: space-between;
    border-bottom: 1px solid #dbdbdb;

    .save {
      background: none;
      border: none;
    }
    .addToFavoritesBtn{
      height: 30px;
      margin: 10px;
      width: 130px;
      border-radius: 12px;
      border: 1px solid white;
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
    
    .openCart {
      width: 70px;
      height: 50px;
      border: 1px solid white;
      border-radius: 12px;
      padding: 10px;
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
