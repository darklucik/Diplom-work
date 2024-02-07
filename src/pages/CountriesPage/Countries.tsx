import React, { useEffect } from "react";
import { StyledCountriesPage } from "./Countries.style";
import { Container } from "../../components/UI/Container/Container.style";
import { Header } from "../../components/Header/Header";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useGetCountriesQuery } from "../../store/API/countriesApi";
import { FullscreenLoader } from "../../components/UI/FullscreenLoader/FullscreenLoader";

export const CountriesPage: React.FC = () => {
  const { data, isLoading, error } = useGetCountriesQuery({});

  if (data) {
    console.log(data);
  }

  if (error) {
    console.log(error);
  }
  return (
    <Container>
      <Header />
      {isLoading && <FullscreenLoader />}
      <StyledCountriesPage>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Артикул</TableCell>
                <TableCell>Cтрана</TableCell>
                <TableCell>Наименование</TableCell>
                <TableCell>Изображение</TableCell>
                <TableCell>Действие</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.response.length &&
                data?.response.map((countries) => (
                  <TableRow>
                    <TableCell>{countries.code}</TableCell>
                    <TableCell>{countries.name}</TableCell>
                    <TableCell>Наименование</TableCell>
                    <TableCell>
                      <img src={countries.flag} alt="" />
                    </TableCell>
                    <TableCell>Действие</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledCountriesPage>
    </Container>
  );
};
