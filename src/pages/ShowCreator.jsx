/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Box, Snackbar, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function ShowCreator() {
  const location = useLocation();
  const { creator } = location.state || {};
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const handleSnackbarClose = () => setSnackbarOpen(false);

  if (!creator) {
    return <div>No creator found!</div>;
  }

  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' }, alignItems: 'center', textAlign: 'center', padding: '2vw', width: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', }} >
          <Typography variant="h1" sx={{ fontSize: { xs: '3vw', sm: '2vw', md: '1.75vw', lg: '1.2vw', xl: '5vw' }, }}>
            {creator.creator_name}
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '3vw', sm: '2vw', md: '1.75vw', lg: '1.2vw', xl: '2vw' }, }}>
            {creator.description}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', position: 'relative', justifyContent: 'center', width: '50%', padding: 3, }}>
          <img alt="selfie" src={creator.imageURL} style={{
            borderRadius: '90%',
            width: '35vw',
            height: '35vw',
            border: '3px solid black',
            objectFit: 'cover',
            objectPosition: 'center '
          }} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'row', sm: 'row', md: 'row', lg: 'column', xl: 'column' }, gap: '0.5vw'}}>
          <a href={creator.instagram_url} target="_blank" rel="noopener noreferrer" onClick={(e) => { if (!creator.instagram_url) { e.preventDefault(); setSnackbarOpen(true); } }}>
            <Box sx={{ fontSize: { xs: '5vw', sm: '4vw', md: '3vw', lg: '2.5vw', xl: '1.5vw' } }}>
              <FaInstagram style={{
                boxShadow: '0vw 0vw 0.5vw rgba(0, 0, 0, 0.5)',
                padding: 2,
                border: '0.1rem solid black',
                borderRadius: '50%',
              }} />
            </Box>
          </a>
          <a href={creator.twitter_url} target="_blank" rel="noopener noreferrer" onClick={(e) => { if (!creator.twitter_url) { e.preventDefault(); setSnackbarOpen(true); } }}>
            <Box sx={{ fontSize: { xs: '5vw', sm: '4vw', md: '3vw', lg: '2.5vw', xl: '1.5vw' } }}>
              <FaTwitter style={{
                boxShadow: '0vw 0vw 0.5vw rgba(0, 0, 0, 0.5)',
                padding: 2,
                border: '0.1rem solid black',
                borderRadius: '50%',
              }} />
            </Box>
          </a>
          <a href={creator.youtube_url} target="_blank" rel="noopener noreferrer" onClick={(e) => { if (!creator.youtube_url) { e.preventDefault(); setSnackbarOpen(true); } }}>
            <Box sx={{ fontSize: { xs: '5vw', sm: '4vw', md: '3vw', lg: '2.5vw', xl: '1.5vw' } }}>
              <FaYoutube style={{
                boxShadow: '0vw 0vw 0.5vw rgba(0, 0, 0, 0.5)',
                padding: 2,
                border: '0.1rem solid black',
                borderRadius: '50%',
              }} />
            </Box>
          </a>
        </Box>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          message="Link not found"
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        />
      </Box>
    </div>
  );
}

export default ShowCreator;
