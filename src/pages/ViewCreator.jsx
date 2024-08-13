/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Button, Box, TextField, Typography } from '@mui/material';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';

function ViewCreator() {
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
          gap: 5, // Adjust the gap as needed
          flexWrap: 'wrap', // This makes the items wrap
          justifyContent: 'center',
          textAlign: 'center',
          padding: 2
        }}>
					{creators.map((creator) => (
						<CreatorCard key={creator.id} name={creator.creator_name} imageURL={creator.imageURL} twitter={creator.twitterURL} youtube={creator.youtubeURL} instagram={creator.instagramURL} description={creator.description} />
					))}
    
        </Box>

      </Box>
    </Box>
	)
}

export default ViewCreator