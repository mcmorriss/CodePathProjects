import { useState, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let element = useRoutes([
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
