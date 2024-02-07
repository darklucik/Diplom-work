import React from "react";
import { StyledLeague } from "./League.style";

interface ILeague {
  isLiked?: boolean;
  isMarked?: boolean;
  leaguename: string;
  leagueLogo: string;
  leagueFlag: string;
  season: string | number;
}

export const League: React.FC<ILeague> = ({
  isLiked,
  isMarked,
  leaguename,
  leagueLogo,
  leagueFlag,
  season,
}: ILeague) => {
  return (
    <StyledLeague $isLiked={isLiked} $isMarked={isMarked}>
      <div className="logo">
        <img src={leagueLogo} alt="" />
      </div>
      <div className="name">
        <h1>{leaguename}</h1>
        <h1>{season}</h1>
      </div>
      <div className="flag">
        {" "}
        <img src={leagueFlag} alt="" />
      </div>
    </StyledLeague>
  );
};
