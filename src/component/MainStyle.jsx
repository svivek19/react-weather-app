import styled from "styled-components";

const Main = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

const InnerDiv = styled.div`
  background-color:transparent;
  backdrop-filter:blur(20px);
  padding:20px;
  width:300px;
  `;

const InputContainer = styled.div`
  background-color:#fff;
  border-radius:5px;
  display:flex;
  `;

const CopyrightEl = styled.p`
  text-align:center;
  font-weight:500;
`;

export default { CopyrightEl, InputContainer, InnerDiv, Main };