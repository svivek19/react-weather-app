import { IconButton, InputBase } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100vw;
  height:100vh;
`;

const InnerDiv = styled.div`
  display: flex;
  align-items: center;
  background-color:transparent;
  backdrop-filter:blur(10px);
  padding:20px;
  width:380px;
  `;

const App = () => {
  return (
    <Main>
      <InnerDiv>
        <div>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Google Maps"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>

        </div>
      </InnerDiv>
    </Main>
  )
}

export default App
