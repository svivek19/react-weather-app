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
  width: 500px;

  @media (max-width: 500px) {
    width: 100%; /* Adjust the width for smaller screens */
    max-width: 300px; /* Set maximum width for small screens */
  }
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

const ErrHandle = styled.div`
  margin-top:10px;
  color:lightgray;
  font-size:20px;
  font-weight:400;
  text-align:center;
`;

export default { CopyrightEl, InputContainer, InnerDiv, Main, ErrHandle };