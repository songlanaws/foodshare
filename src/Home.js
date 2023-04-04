import React from 'react';
import {Box, Container, Stack } from '@mui/material'; 
import HomeBar from './home-page/HomeBar';
import HomeLogoIntro from './home-page/HomeLogoIntro';

import './styles/home-page/Home.css';

const Home = () => {
  return (
    <div>
      <header>
        <HomeBar />
      </header>
      <main>
        <Container fixed>
            <Box ss={{ width: '100%' }}>
                <Stack spacing={2} className='homeContent'>
                    <div>
                        <HomeLogoIntro />
                    </div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                </Stack>
            </Box>
        </Container>
      </main>
    </div>
  );
};

export default Home;
