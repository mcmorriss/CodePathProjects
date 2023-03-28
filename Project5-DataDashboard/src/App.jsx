import { useState, useEffect } from 'react'
import './App.css'
import { Card, Col, Row } from 'antd';
const VITE_APP_API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [list, setList] = useState(null);
  const [guards, setGuards] = useState(0);

  const [forwards, setForwards] = useState(0);
  const [centers, setCenters] = useState(0);

  const [pointAverage, setPointAverage] = useState(0);
  const [totalPts, setTotalPts] = useState(0);

  const [maxPts, setMaxPts] = useState(0);
  const [maxPtsPlayer, setMaxPtsPlayer] = useState("");

  const [minPts, setMinPts] = useState(1500);
  const [minPtsPlayer, setMinPtsPlayer] = useState("");

  const options = {
    method: 'GET',
	  headers: {
		  'X-RapidAPI-Key': '4748740ac5msh5e347fb4faf6b53p105410jsn40251a08819a',
		  'X-RapidAPI-Host': 'basketapi1.p.rapidapi.com'
	  }
  }

  useEffect(() => {
    const fetchAllPlayers = async () => {
      const response = await fetch('https://basketapi1.p.rapidapi.com/api/basketball/tournament/132/season/38191/best-players/regularseason', options);
      const json = await response.json();
      setList(json);
      
    }
    fetchAllPlayers().catch(console.error)
  }, []);

  const getPositionNums = () => {
    for (let i = 0; i < list.topPlayers.points.length; i++){
      if(list.topPlayers.points[i].player.position.includes("G") === true){
        setGuards(guards + 1)
      }
      if(list.topPlayers.points[i].player.position.includes("F") === true){
        setForwards(forwards + 1)
      }
      if(list.topPlayers.points[i].player.position.includes("C") === true){
        setCenters(centers + 1)
      }
      if(list.topPlayers.points[i].statistics.points > 0){
        setTotalPts(totalPts + list.topPlayers.points[i].statistics.points)
      }
      if(list.topPlayers.points[i].statistics.points > maxPts){
        setMaxPts(list.topPlayers.points[i].statistics.points)
        setMaxPtsPlayer(list.topPlayers.points[i].player.name)
      }
      if(list.topPlayers.points[i].statistics.points < minPts){
        setMinPts(list.topPlayers.points[i].statistics.points)
        setMinPtsPlayer(list.topPlayers.points[i].player.name)
      }

    }
    
  }

  return (
    <div className="App">
      <h1>NBA Stat Hub</h1>
      <Row gutter={16}>

        <Col span={8}>
          <Card title="Numbers by Position">
            {/*list && Object.entries(list.topPlayers.points).map(([curr]) => 
              list.topPlayers.points[curr].player.position.includes("G") === true ? (
                setGuards(guards + 1)
              ) : null
              )*/}
            {/*list && Object.entries(list.topPlayers.points).map(([curr]) => 
              list.topPlayers.points[curr].player.position.includes("F") === true ? (
                setForwards(forwards + 1)
              ) : null
            )}
            {list && Object.entries(list.topPlayers.points).map(([curr]) => 
              list.topPlayers.points[curr].player.position.includes("C") === true ? (
                setCenters(centers + 1)
              ) : null
              )*/}
            <p>Guards: <b>{guards}</b></p>
            <p>Forwards: <b>{forwards}</b></p>
            <p>Centers: <b>{centers}</b></p>
            
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Mean/Average Points">
            {/*list && Object.entries(list.topPlayers.points).map(([curr]) =>
              list.topPlayers.points[curr].statistics.points > 0 ? (
                setTotalPts(totalPts + list.topPlayers.points[curr].statistics.points)
              ) : null
              )*/}
            <p>Mean: {(totalPts/50)} </p>
            <p>Total Points: {(totalPts)} </p>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Ranges of Points">
            {/*list && Object.entries(list.topPlayers.points).map(([curr]) => 
              list.topPlayers.points[curr].statistics.points > maxPts ? (
                setMaxPts(list.topPlayers.points[curr].statistics.points)
              ) : null
              )*/}
            {/*list && Object.entries(list.topPlayers.points).map(([curr]) => 
              list.topPlayers.points[curr].statistics.points < minPts ? (
                setMinPts(list.topPlayers.points[curr].statistics.points)
              ) : null
              )*/}

            <p> Maximum total points: <b>{maxPts}</b> Player: <b>{maxPtsPlayer}</b> </p>
            <p> Minimum total points: <b>{minPts}</b> Player: <b>{minPtsPlayer}</b></p>

          </Card>
        </Col>

      </Row>
      <ul>
        {list && Object.entries(list.topPlayers.points).map(([curr]) => 
          <li key={list.topPlayers.points[curr].player.name}>
            Player: <b>{list.topPlayers.points[curr].player.name}  </b>
            Points per game: <b>{(list.topPlayers.points[curr].statistics.points / 
                              list.topPlayers.points[curr].statistics.appearances).toFixed(1)}  </b> 
            Total points: <b>{list.topPlayers.points[curr].statistics.points}  </b> 
            Games Played: <b>{list.topPlayers.points[curr].statistics.appearances}  </b>
            Team: <b>{list.topPlayers.points[curr].team.name}  </b>
          </li>
        )}
      </ul>
      
    </div>
  )
}

export default App
