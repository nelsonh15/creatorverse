/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Box, TextField, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom'
import FormSubmitted from "../components/FormSubmitted";
import { supabase } from '../client';

function EditCreator() {
  const location = useLocation();
  const { creator } = location.state || {};
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState(creator.creator_name);
  const [imageURL, setImageURL] = useState(creator.imageURL);
  const [description, setDescription] = useState(creator.description);
  const [youtubeURL, setYoutubeURL] = useState(creator.youtube_url);
  const [twitterURL, setTwitterURL] = useState(creator.twitter_url);
  const [instagramURL, setInstagramURL] = useState(creator.instagram_url);

  const handleSubmit = () => {
    updateCreator(name, imageURL, description, youtubeURL, twitterURL, instagramURL);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };
  async function updateCreator(name, imageURL, description, youtubeURL, twitterURL, instagramURL) {
    const { data, error } = await supabase
      .from('creators')
      .update(
        { 
          creator_name: name, 
          imageURL: imageURL, 
          description: description, 
          youtube_url: youtubeURL, 
          twitter_url: twitterURL, 
          instagram_url: 
          instagramURL 
        }
      )
      .eq('id', creator.id)
      .select()

    if (error) {
      console.error("Error updating row!", error);
    } else {
      console.log("Row updated!", data);
    }
  }

  if (!creator) {
    return <div>No creator found!</div>;
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Box>
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
          Update Creator Form
        </Typography>
      </Box>
      <Box sx={{ paddingRight: 30, paddingLeft: 30 }}>
        <TextField required autoFocus margin="dense" id="name" label="Name" fullWidth variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField margin="dense" id="imageURL" label="Image URL" fullWidth variant="standard" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
        <TextField margin="dense" id="description" label="Description" fullWidth variant="standard" multiline rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
        <Box sx={{ paddingTop: 10 }}>
          <Typography variant="h5" >
            Social Media Links
          </Typography>
        </Box>
        <TextField margin="dense" id="youtubeURL" label="Youtube URL" fullWidth variant="standard" value={youtubeURL} onChange={(e) => setYoutubeURL(e.target.value)} />
        <TextField margin="dense" id="twitterURL" label="Twitter URL" fullWidth variant="standard" value={twitterURL} onChange={(e) => setTwitterURL(e.target.value)} />
        <TextField margin="dense" id="instagramURL" label="Instagram URL" fullWidth variant="standard" value={instagramURL} onChange={(e) => setInstagramURL(e.target.value)} />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', padding: 3 }}>
        <Button variant="contained" onClick={handleSubmit} > Update </Button>
      </Box>
      <FormSubmitted open={submitted} setOpen={setSubmitted} message="Form updated!" />
    </Box>
  );
}

export default EditCreator;
