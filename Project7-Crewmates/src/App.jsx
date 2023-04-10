import { useState, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import ReadPost from './pages/ReadPost'
import './App.css'
import { Row, Col } from 'antd';
import { supabase } from './client'

function App() {
  const [members, setMembers] = useState([]);

  let element = useRoutes([
    {
      path: "/",
      element: <ReadPost />

    },
    {
      path: "/create",
      element: <CreatePost />
    }
  ])

  return (
    <div className="App">
      <h1>Hackathon Team Builder</h1>
      {element}
    </div>
  )
}

export default App
