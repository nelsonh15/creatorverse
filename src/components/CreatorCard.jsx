/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Box, Button, Snackbar, Typography } from '@mui/material';
import { AspectRatio, CardOverflow, Card, CardContent, CardActions, Divider, IconButton } from '@mui/joy';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';

function CreatorCard({ creator, name, imageURL, twitter, youtube, instagram, description, deleteCreatorHandler, editCreatorHandler }) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const handleSnackbarClose = () => setSnackbarOpen(false);

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
          <CardContent orientation="horizontal" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '0.5vw', paddingLeft: 2, }}>
              <a href={instagram} target="_blank" rel="noopener noreferrer" onClick={(e) => { if (!instagram) { e.preventDefault(); setSnackbarOpen(true); } }}>
                <Box sx={{ fontSize: { xs: '5vw', sm: '4vw', md: '3vw', lg: '2.5vw', xl: '1.5vw' } }}>
                  <FaInstagram style={{
                    boxShadow: '0vw 0vw 0.5vw rgba(0, 0, 0, 0.5)',
                    padding: 2,
                    border: '0.1rem solid black',
                    borderRadius: '50%',
                  }} />
                </Box>
              </a>
              <a href={twitter} target="_blank" rel="noopener noreferrer" onClick={(e) => { if (!twitter) { e.preventDefault(); setSnackbarOpen(true); } }}>
                <Box sx={{ fontSize: { xs: '5vw', sm: '4vw', md: '3vw', lg: '2.5vw', xl: '1.5vw' } }}>
                  <FaTwitter style={{
                    boxShadow: '0vw 0vw 0.5vw rgba(0, 0, 0, 0.5)',
                    padding: 2,
                    border: '0.1rem solid black',
                    borderRadius: '50%',
                  }} />
                </Box>
              </a>
              <a href={youtube} target="_blank" rel="noopener noreferrer" onClick={(e) => { if (!youtube) { e.preventDefault(); setSnackbarOpen(true); } }}>
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

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '0.5vw', paddingRight: 2, }}>
              <IconButton
                aria-label="delete"
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <InfoIcon fontSize="small" style={{ color: "gray" }} />
              </IconButton>

              <IconButton
                aria-label="restore"
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  editCreatorHandler(creator.id)
                }}>
                <EditIcon fontSize="small" style={{ color: "green" }} />
              </IconButton>

              <IconButton
                aria-label="delete"
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteCreatorHandler(creator.id)
                }}>
                <DeleteIcon fontSize="small" style={{ color: "red" }} />
              </IconButton>
            </Box>
          </CardContent>
        </CardOverflow>
      </Card>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Link not found"
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </Box>
  )
}

export default CreatorCard