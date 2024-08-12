/* eslint-disable no-unused-vars */
import React from 'react';
import { supabase } from './client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';

export default function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-creator" element={<AddCreator />} />
          <Route path="/edit-creator" element={<EditCreator />} />
          <Route path="/show-creators" element={<ShowCreators />} />
          <Route path="/view-creator" element={<ViewCreator />} />
        </Routes>
    </BrowserRouter>
    </div >
  );
}