import React from "react";
import { StyledCartPage } from "./CartPage.style";
import { Container } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useSave } from "../../components/Match/SaveContext";

export const CartPage = () => {
  const location = useLocation();
  const matchInfo = location.state?.matchInfo;
  const navigate = useNavigate();
  const { savedMatchInfo, clearSavedMatchInfo } = useSave();

  const handleClearClick = () => {
    clearSavedMatchInfo();

    navigate("/main");
  };
  if (!matchInfo || !matchInfo.homeLogo || !matchInfo.awayLogo) {
    console.error("Wrong information please try later");
    return null;
  }

  return (
    <Container>
      
      <StyledCartPage>
        <div className="clearIcon">
          <button onClick={handleClearClick}>
            <img src="./img/clear.png" alt="" />
          </button>
        </div>
        <div className="logos">
          <div className="homelogo">
            <img src={matchInfo.homeLogo} alt="" />
          </div>
          <div className="awaylogo">
            <img src={matchInfo.awayLogo} alt="" />
          </div>
        </div>
        <div className="names">
          <div className="homename">
            <h2>{matchInfo.homeName}</h2>
          </div>
          <div className="homeAndaway">
            <h3>VS</h3>
          </div>
          <div className="awayname">
            
            <h2>{matchInfo.awayName}</h2>
          </div>
        </div>
        <div className="goals">
          <div className="homegoal">
            <h1> {matchInfo.homeGoal}</h1>
          </div>
          <div className="awaygoal">
            <h1>{matchInfo.awayGoal}</h1>
          </div>
        </div>
        <div className="long">
          <h2>{matchInfo.long}</h2>
        </div>
      </StyledCartPage>
    </Container>
  );
};
