/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { supabase } from './client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import Home from './pages/Home';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ShowCreator from './pages/ShowCreator';
import ViewCreator from './pages/ViewCreators';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Box width="100%" height="100%" padding="0rem 0rem 0rem 0rem">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-creator" element={<AddCreator />} />
            <Route path="/edit-creator" element={<EditCreator />} />
            <Route path="/edit-creator/:id" element={<EditCreator />} />
            <Route path="/show-creators" element={<ShowCreator />} />
            <Route path="/show-creators/:id" element={<ShowCreator />} />
            <Route path="/view-creator" element={<ViewCreator />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div >
  );
}