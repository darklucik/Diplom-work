import React, { useContext, useEffect, useState } from "react";
import { Container } from "../../components/UI/Container/Container.style";
import { MatchItem, useLazyGetCountriesQuery } from "../../store/API/matchApi";
import { FullscreenLoader } from "../../components/UI/FullscreenLoader/FullscreenLoader";
import { Menu } from "../../components/Menu/Menu";
import { StyledMainPage } from "./MainPage.style";
import { Match } from "../../components/Match/Match";
import { ThemeContext, themes } from "../../contexts/themeContext";
import { League } from "../../components/League/League";
import { Header } from "../../components/Header/Header";
import { Navigate, useNavigate } from "react-router-dom";

export const MainPage = () => {
  const [fetchTrigger, { data, isLoading, error }] = useLazyGetCountriesQuery(
    {}
  );
  const [index, setIndex] = useState(0);
  const { theme, toggleTheme } = useContext(ThemeContext);


  const navigate = useNavigate()

  console.log("theme", theme);
  useEffect(() => {
    fetchTrigger(null);
  }, [fetchTrigger, data]);

  if (data) {
    console.log(data);
  }

  if (error) {
    console.log(error);
  }

  interface MatchItem {
    fixture: {
      id: number;
      status: {
        long: string;
      };
    };
    teams: {
      home: {
        logo: string;
        name: string;
      };
      away: {
        logo: string;
        name: string;
      };
    };
    goals: {
      home: string | number;
      away: string | number;
    };
    
  }

  const moveToFavorites = () => {
    navigate("/favorites")
  }
  

  const handleAddToFavorites = (match: MatchItem): void => {
    const existingFavorites: MatchItem[] = JSON.parse(localStorage.getItem("favorites") || "[]");
  
    const isAlreadyAdded: boolean = existingFavorites.some(item => item.fixture.id === match.fixture.id);
  
    if (!isAlreadyAdded) {
      const updatedFavorites: MatchItem[] = [...existingFavorites, match];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };
  
  

  return (
    <>
      <Container
        style={{
          background: theme === themes.dark ? "#131212" : "#fff",
          color: theme === themes.dark ? "#169ea2" : "",
        }}
      >
        <Header />

        {isLoading && <FullscreenLoader />}
        <Menu />
        <StyledMainPage>
          <div className="footballList">
            <div className="listTitle">
              <h1>Текстовые трансляции Not 1XBet</h1>
            </div>
            <button onClick={moveToFavorites}>Favorites</button>
            <div className="recommendations">
              
              <div className={index === 0 ? "matchs" : "matchTwo"}>
                {!!data?.response.length &&
                  data?.response.map((match) => (
                    <Match
                      key={match.fixture.id}
                      homeLogo={match?.teams?.home.logo}
                      homeName={match?.teams?.home.name}
                      awayLogo={match?.teams?.away.logo}
                      awayName={match?.teams?.away.name}
                      long={match?.fixture?.status.long}
                      homeGoal={match?.goals?.home}
                      awayGoal={match?.goals?.away}
                      onClick={() => handleAddToFavorites(match)}
                    />
                  ))}
              </div>
            </div>
          </div>
        </StyledMainPage>
      </Container>
    </>
  );
};
