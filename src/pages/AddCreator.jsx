/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Box, TextField, Typography } from '@mui/material';
import FormSubmitted from "../components/FormSubmitted";
import { supabase } from '../client';

function AddCreator() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [description, setDescription] = useState('');
  const [youtubeURL, setYoutubeURL] = useState('');
  const [twitterURL, setTwitterURL] = useState('');
  const [instagramURL, setInstagramURL] = useState('');

  const handleSubmit = () => {
    addCreator(name, imageURL, description, youtubeURL, twitterURL, instagramURL);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
    setName('')
    setImageURL('')
    setDescription('')
    setYoutubeURL('')
    setTwitterURL('')
    setInstagramURL('')
  };

  async function addCreator(name, imageURL, description, youtubeURL, twitterURL, instagramURL) {
    const { data, error } = await supabase
      .from('creators')
      .insert([
        {
          creator_name: name,
          imageURL: imageURL,
          description: description,
          youtube_url: youtubeURL,
          twitter_url: twitterURL,
          instagram_url: instagramURL
        }
      ])
      .select()

    if (error) {
      console.error("Error inserting row!", error);
    } else {
      console.log("Row inserted!", data);
    }
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Box>
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
          Add Creator Form
        </Typography>
      </Box>
      <Box sx={{ paddingRight: 30, paddingLeft: 30 }}>
        <TextField required autoFocus margin="dense" id="name" label="Name" fullWidth variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField autoFocus margin="dense" id="imageURL" label="Image URL" fullWidth variant="standard" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
        <TextField autoFocus margin="dense" id="description" label="Description" fullWidth variant="standard" multiline rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
        <Box sx={{ paddingTop: 10 }}>
          <Typography variant="h5" >
            Social Media Links
          </Typography>
        </Box>
        <TextField autoFocus margin="dense" id="youtubeURL" label="Youtube URL" fullWidth variant="standard" value={youtubeURL} onChange={(e) => setYoutubeURL(e.target.value)} />
        <TextField autoFocus margin="dense" id="twitterURL" label="Twitter URL" fullWidth variant="standard" value={twitterURL} onChange={(e) => setTwitterURL(e.target.value)} />
        <TextField autoFocus margin="dense" id="instagramURL" label="Instagram URL" fullWidth variant="standard" value={instagramURL} onChange={(e) => setInstagramURL(e.target.value)} />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', padding: 3 }}>
        <Button variant="contained" onClick={handleSubmit} > Submit </Button>
      </Box>
      <FormSubmitted open={submitted} setOpen={setSubmitted} />
    </Box>
  )
}

export default AddCreator