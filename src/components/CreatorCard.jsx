/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Box, Button, Toolbar, Typography } from '@mui/material';
import { AspectRatio, CardOverflow, Card, CardContent, CardActions, Divider } from '@mui/joy';
import Carousel from 'react-material-ui-carousel';

function CreatorCard({ name, imageURL, twitter, youtube, instagram, description }) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  const calculateRatio = () => {
    // Define breakpoints
    const breakpoints = {
      xs: 0,    // Assuming 0 as starting point for xs
      sm: 600,  // Example breakpoint for sm
      md: 900,  // Example breakpoint for md
      lg: 1200, // Example breakpoint for lg
      xl: 1536  // Example breakpoint for xl
    };
  
    // Get current window width
    const width = window.innerWidth;
  
    if (width >= breakpoints.xl) {
      return (0.6 * width) / window.innerHeight;
    } 
    else if (width >= breakpoints.lg) {
      return (0.8 * width) / window.innerHeight;
    } 
    else if (width >= breakpoints.md) {
      return (1.5 * width) / window.innerHeight;
    } 
    else if (width >= breakpoints.sm) {
      return (2 * width) / window.innerHeight;
    } 
    else { // xs
      return (3 * width) / window.innerHeight;
    }
  };

  const ratio = calculateRatio();

  return (
    <Box
      sx={{
        margin: '0.15em',
        justifyContent: 'center',
        display: 'flex'
      }}>
      <Card variant="outlined"
        sx={{
          width: { xs: '55vw', sm: '50vw', md: '22vw', lg: '23vw', xl: '25vw' },
          height: 'auto',
          boxShadow: '0vw 0vw 0.7vw rgba(0, 0, 0, 0.75)',
          border: 'solid grey 0.1vw',
          padding: 0
        }}>
        <CardOverflow onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <AspectRatio ratio={ratio} sx={{}}>
            <img
              src={imageURL}
              loading="lazy"
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {isHovering && (
              <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1vw'
              }}>
                <Typography variant="h6" sx={{ fontSize: { xs: '2vw', sm: '1.70vw', md: '1vw', lg: '0.95vw', xl: '0.9vw' } }}>
                  {description}
                </Typography>
              </Box>
            )}
          </AspectRatio>
        </CardOverflow>

        <CardContent sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: { xs: '1.7vw', sm: '1.5vw', md: '1.4vw', lg: '1.2vw', xl: '1vw' } }}>
            {name}
          </Typography>
        </CardContent>

        <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
          <Divider inset="context" />
          <CardContent orientation="horizontal" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
              <Button sx={{ fontSize: { xs: '1.2vw', sm: '1vw', md: '0.75vw', lg: '0.8vw', xl: '0.6vw' }, }} size="medium" href={instagram} target="_blank" rel="noopener noreferrer">Instagram</Button>
              <Button sx={{ fontSize: { xs: '1.2vw', sm: '1vw', md: '0.75vw', lg: '0.8vw', xl: '0.6vw' }, }} size="medium" href={youtube} target="_blank" rel="noopener noreferrer">Youtube</Button>
          </CardContent>
        </CardOverflow>
      </Card>
    </Box>
  )
}

export default CreatorCard