import React, { useEffect, useState } from "react";
import { MatchItem } from "../../store/API/matchApi";
import { FavoriteStyle } from "./favorites.styled";
import { useNavigate } from "react-router-dom";

const FavoritesPage: React.FC = () => {
  const navigate = useNavigate();

  const [favoritesData, setFavoritesData] = useState<MatchItem[]>([]);

  useEffect(() => {
    const favoritesFromStorage = localStorage.getItem("favorites");
    if (favoritesFromStorage) {
      setFavoritesData(JSON.parse(favoritesFromStorage));
    }
  }, []);

  const removeMatchFromFavorites = (matchId: number) => {
    const updatedFavorites = favoritesData.filter(
      (match) => match.fixture.id !== matchId
    );
    setFavoritesData(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const moveToMain = () => {
    navigate("/main");
  };

  return (
    <FavoriteStyle>
      <div>
        <h1>Избранные матчи</h1>
        <button onClick={moveToMain}>Back to main</button>
        <ul>
          {favoritesData.map((match, index) => (
            <li key={index} className="listOfMatches">
              <div className="matchesFav">
                <div>
                  <img src={match.teams.home.logo} alt="" />
                  <p> {match.teams.home.name}</p>
                </div>
                <div>
                  <img src={match.teams.away.logo} alt="" />
                  <p> {match.teams.away.name}</p>
                </div>
              </div>
              <div className="matchInfo">
                <p>
                  {match.goals.home} : {match.goals.away}
                </p>
                <p> {match.fixture.status.long}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </FavoriteStyle>
  );
};

export default FavoritesPage;
