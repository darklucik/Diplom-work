import React, { useContext, useState } from "react";
import { StyledProfilePage } from "./ProfilePage.style";
import {
  TextField,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
} from "@mui/material";
import { Header } from "../../components/Header/Header";
import { Heading } from "../../components/Typograohy/Heading";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/UI/Button/Button";
import { ThemeContext, themes } from "../../contexts/themeContext";

export const ProfilePage: React.FC = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const storedDataString = localStorage.getItem(
    "registrationFormData" || "loginFormData"
  );
  const storedData = storedDataString ? JSON.parse(storedDataString) : null;

  const username = storedData ? storedData[0] : "N/A";
  const useremail = storedData ? storedData[2] : "N/A";

  const handleSubmit = () => {
    navigate("/main");
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    setIsLoggedOut(true);

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <Container
      style={{
        background: theme === themes.dark ? "#333" : "#fff",
        color: theme === "default" ? "#fff" : "#333",
      }}
    >
      <Header />
      <StyledProfilePage>
        <Heading headingText="Профиль" headingType="h1" />
        <div className="info">
          <div className="name">
            <h3>Имя: {username}</h3>
          </div>
          <div className="email">
            <h3>Почта: {useremail}</h3>
          </div>
        </div>
        <div className="Btn">
          <div className="logout">
            <Heading headingText={isLoggedOut ? "" : ""} />
            <button onClick={handleLogout}>Выйти</button>
          </div>
          <div className="submit">
            <button onClick={handleSubmit}>Главная страница</button>
          </div>
        </div>
      </StyledProfilePage>
    </Container>
  );
};
