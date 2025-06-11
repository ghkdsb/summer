import {Route, Routes} from 'react-router-dom'
import React from "react";
import Nav from "./pages/Nav";

import Food from './pages/Food';
import Recipe from './pages/Recipe';
import Music from './pages/Music';
import MusicPlayer from './pages/MusicPlayer';
import CalendarPage from './pages/CalendarPage';
import Memo from './pages/Memo';
import Drawing from './pages/Drawing';
import Gallery from './pages/Gallery';
import Level from './pages/Level';
import Game from './pages/Game';

import Footer from './pages/Footer';


function App() {
  return (
    <div>
      <Nav />
      <Routes>
      {/* <Route path="/" element ={<Match/>}/> */}
      <Route path="/" element ={<Food/>}/>
      <Route path="/Food" element ={<Food/>}/>
      <Route path="/Food/:url" element={<Recipe />} />

      <Route path="/Music" element ={<Music/>}/>
      <Route path="/MusicPlayer/:url" element={<MusicPlayer />} />

      <Route path="/CalendarPage" element ={<CalendarPage/>}/>
      <Route path="/Memo/:date" element ={<Memo/>}/>

      <Route path="/Drawing" element ={<Drawing/>}/>
      <Route path="/Gallery" element ={<Gallery/>}/>
      
      <Route path="/Level" element ={<Level/>}/>
      <Route path="/Game/:level" element ={<Game/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
