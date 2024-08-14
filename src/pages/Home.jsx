/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Button, Grid, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AddCreator from './AddCreator';
import ViewCreator from './ViewCreators';

function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', backgroundColor: '#e3f2fd', width: '100%', height: '100vh' }}>
      <Box sx={{ padding: '3vw' }}>
        <Typography variant="h5" sx={{ fontSize: { xs: '3vw', sm: '2.5vw', md: '5vw', lg: '3.75vw', xl: '5.3vw' } }}>
          Creatorverse
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', padding: '1vw' }}>
        <Box sx={{ padding: 2 }}>
          <Button sx={{ fontSize: { xs: '2vw', sm: '1.5vw', md: '1.25vw', lg: '1vw', xl: '1vw' }, padding: '4.5vw 3.5vw' }} variant="contained" key='about' component={Link} to='view-creator'>
            View All Creators
          </Button>
        </Box>
        <Box sx={{ padding: 2 }}>
          <Button sx={{ fontSize: { xs: '2vw', sm: '1.5vw', md: '1.25vw', lg: '1vw', xl: '1vw' }, padding: '4.5vw 4.5vw' }} variant="contained" key='about' component={Link} to='add-creator'>
            Add Creator
          </Button>
        </Box>

      </Box>

    </Box >


  );
}

export default Home;