/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Button, Box, TextField, Typography } from '@mui/material';
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';
import NoCreatorsComp from "../components/NoCreatorsComp";
import CreatorCard from '../components/CreatorCard';

function ViewCreator() {
  const navigate = useNavigate();
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const allCreators = async () => {
      let { data: creators, error } = await supabase
        .from('creators')
        .select('*')

      if (error) {
        console.error("Error generating rows!", error);
      } else {
        setCreators(creators);
        console.log("All rows successfully generated!", creators);
      }
    }
    allCreators();
  }, []);

  const showCreatorHandler = async (creatorID) => {
    const selectedCreator = creators.find(creator => creator.id === creatorID);

    if (selectedCreator) {
      navigate('/show-creators', { state: { creator: selectedCreator } });
    } else {
      console.error('Creator not found');
    }
  }

  const editCreatorHandler = async (creatorID) => {
    const selectedCreator = creators.find(creator => creator.id === creatorID);

    if (selectedCreator) {
      navigate('/edit-creator', { state: { creator: selectedCreator } });
    } else {
      console.error('Creator not found');
    }
  }

  const deleteCreatorHandler = async (creatorID) => {
    const { error } = await supabase
      .from('creators')
      .delete()
      .eq('id', creatorID)

    if (error) {
      console.error("Error deleting row!", error);
    } else {
      console.log('Row successfully deleted!');
      setCreators(prevCreators => prevCreators.filter(creator => creator.id !== creatorID));
    }
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '2vw' }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '7vw', sm: '6vw', md: '5vw', lg: '4vw', xl: '3vw' } }}>
            Creators
          </Typography>
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' },
          alignItems: 'center',
          gap: 5,
          flexWrap: 'wrap',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 2
        }}>
          {creators.length != 0 ? (
            creators.map((creator) => (
              <CreatorCard
                creator={creator}
                key={creator.id}
                name={creator.creator_name}
                imageURL={creator.imageURL}
                twitter={creator.twitter_url}
                youtube={creator.youtube_url}
                instagram={creator.instagram_url}
                description={creator.description}
                showCreatorHandler={showCreatorHandler}
                editCreatorHandler={editCreatorHandler}
                deleteCreatorHandler={deleteCreatorHandler}
              />
            ))
          ) : (
            <NoCreatorsComp />
          )
          }
        </Box>
      </Box>
    </Box>
  )
}

export default ViewCreator