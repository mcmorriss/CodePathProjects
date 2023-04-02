import { useState, useEffect } from 'react'
import './App.css'
import { Card, Col, Row, Table } from 'antd';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LinearScale, CategoryScale, BarElement, Title } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home.jsx'
import PlayerDetails from './components/PlayerDetails.jsx';

const VITE_APP_API_KEY = import.meta.env.VITE_APP_API_KEY;
ChartJS.register(ArcElement, Tooltip, Legend, LinearScale, CategoryScale, BarElement, Title);

function App() {
  

  return (
    <div className="App">
      <h1>NBA Stat Hub</h1>
      <h3><Link to="/">Home</Link></h3>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player/:id" element={<PlayerDetails />} />
      </Routes>
 
    </div>
  )
}

export default App
