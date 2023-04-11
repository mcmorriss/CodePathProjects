import { useState, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import ReadPost from './pages/ReadPost'
import EditPost from './pages/EditPost'
import ViewPost from './pages/ViewPost'
import './App.css'
import { supabase } from './client';
import { Link } from 'react-router-dom';


function App() {
  const members = []

  let element = useRoutes([
    {
      path: "/",
      element: <ReadPost />
    },
    {
      path: "/create",
      element: <CreatePost />
    },
    {
      path: "/edit/:id",
      element: <EditPost />
    },
    {
      path: "/view/:id",
      element: <ViewPost />
    },
  ])

  return (
    <div className="App">
      <div className='header'>
        <h1>Hackathon Team Builder</h1>
        <Link to="/"><button > Member Home </button></Link>
        <Link to="/create"><button > Create a New Member </button></Link>
      </div>
      
      {element}
    </div>
  )
}

export default App
