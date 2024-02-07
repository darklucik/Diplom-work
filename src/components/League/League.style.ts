import styled, { css } from "styled-components";

interface IStyledLeagueProps {
  $isLiked?: boolean;
  $isMarked?: boolean;
}

export const StyledLeague = styled.div<IStyledLeagueProps>`
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0;
  background: ${(props) => props.theme.colors.bgc};
  .name {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }
  img {
    height: 60px;
  }
  ${(props) =>
    props.$isLiked &&
    css`
      .icon-wrapper {
        .icon-like {
          fill: ${(props) => props.theme.colors.red};
          stroke: 0;
          stroke-width: 0;
        }

        .likes-count {
          color: ${(props) => props.theme.colors.red};
        }
      }
    `}

  ${(props) =>
    props.$isMarked &&
    css`
      .icon-wrapper {
        .icon-mark {
          fill: ${(props) => props.theme.colors.primeColor};
          stroke: 0;
          stroke-width: 0;
        }
      }
    `}
`;
