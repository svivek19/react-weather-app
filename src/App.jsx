import { IconButton, InputBase } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import WeatherDetails from './component/WeatherDetails';
import MainStyle from './component/MainStyle';

const App = () => {

  return (
    <MainStyle.Main>
      <MainStyle.InnerDiv>
        <MainStyle.InputContainer>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search City"
            inputProps={{ 'aria-label': 'search city' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </MainStyle.InputContainer>
        <WeatherDetails  />
        <MainStyle.CopyrightEl>Designed by <span>Vivekananthan</span></MainStyle.CopyrightEl>
      </MainStyle.InnerDiv>
    </MainStyle.Main>
  )
}

export default App
