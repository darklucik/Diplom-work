import styled from "styled-components";

export const Container = styled.div`
  padding: 0px calc(5vw - 10px);
  margin-top: calc(4vw + 13px);
  //? 146 - 1920 | 85 - 530
  & ._dark {
    background: #22222a;
    color: wheat;
  }
  ._dark input {
    color: #f3f2ff;
    background: #22222a;
  }
`;
