import { useState, useEffect } from 'react'
import './App.css'
import { Card, Col, Row, Table } from 'antd';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LinearScale, CategoryScale, BarElement, Title } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

const VITE_APP_API_KEY = import.meta.env.VITE_APP_API_KEY;
ChartJS.register(ArcElement, Tooltip, Legend, LinearScale, CategoryScale, BarElement, Title);

function App() {
  const [list, setList] = useState(null);
  const [arr, setArr] = useState(null);
  const [posArr, setPosArr] = useState(null);
  const [graphData, setGraphData] = useState(null);
  const [graphData2, setGraphData2] = useState(null);
  const [dataSet, setDataSet] = useState(null);

  const [guards, setGuards] = useState(0);
  const [forwards, setForwards] = useState(0.0);
  const [centers, setCenters] = useState(0);
  const [totalPts, setTotalPts] = useState(0);
  const [maxPts, setMaxPts] = useState(1000);
  const [minPts, setMinPts] = useState(1500);

  const options = {
    method: 'GET',
	  headers: {
		  'X-RapidAPI-Key': '0ca62902a0msh295933111988347p11408ajsnf39fe766346f',
		  'X-RapidAPI-Host': 'basketapi1.p.rapidapi.com'
	  }}

  const columns = [
    {
      title: 'Player',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position'
    },
    {
      title: 'Points Per Game',
      dataIndex: 'ppg',
      key: 'ppg',
      sorter: (a, b) => a.ppg - b.ppg
    },
    {
      title: 'Total Points',
      dataIndex: 'total',
      key: 'total',
      sorter: (a, b) => a.total - b.total,
    },
    {
      title: 'Games Played',
      dataIndex: 'games',
      key: 'games',
      sorter: (a, b) => a.games - b.games
    },
    {
      title: 'Team',
      dataIndex: 'team',
      key: 'team',
      sorter: (a, b) => a.team.localeCompare(b.team)
    },
  ]

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
  }

  useEffect(() => {
    const fetchAllPlayers = async () => {
      const response = await fetch('https://basketapi1.p.rapidapi.com/api/basketball/tournament/132/season/38191/best-players/regularseason', options);
      const json = await response.json();
      setList(json.topPlayers.points);
    }
    fetchAllPlayers().catch(console.error)
  }, []);

  useEffect(() => {
    if (list) {
      const getGuards = () => {
        let numGuards = 0;
        for (let curr = 0; curr < list.length; curr++){
          if (list[curr].player.position.includes("G") === true){
            numGuards += 1
          }}
        setGuards(numGuards);
      }
      getGuards();
    }
  }, [list])

  useEffect(() => {
    if (list) {
      const getForwards = () => {
        let numForwards = 0;
        for (let curr = 0; curr < list.length; curr++){
          if (list[curr].player.position.includes("F") === true){
            numForwards += 1
          }}
        setForwards(numForwards);
      }
      getForwards();
    }
  }, [list])

  useEffect(() => {
    if (list) {
      const getCenters = () => {
        let numCenters = 0;
        for (let curr = 0; curr < list.length; curr++){
          if (list[curr].player.position.includes("C") === true){
            numCenters += 1
          }}
        setCenters(numCenters);
      }
      getCenters();
    }
  }, [list])

  useEffect(() => {
    if (list) {
      const getTotalPoints = () => {
        let pointSum = 0;
        for (let curr = 0; curr < list.length; curr++){
          if (list[curr].statistics.points > 0) {
            pointSum += list[curr].statistics.points
          }}
        setTotalPts(pointSum)
      }
      getTotalPoints();
    }
  }, [list])

  useEffect(() => {
    if (list) {
      const getMaxPoints = () => {
        let highestPts = 0;
        for (let curr = 0; curr < list.length; curr++){
          if (list[curr].statistics.points > highestPts) {
            highestPts = list[curr].statistics.points
          }}
        setMaxPts(highestPts)
      }
      getMaxPoints();
    }
  }, [list])

  useEffect(() => {
    if (list) {
      const getMinPoints = () => {
        let lowestPts = 2000;
        for (let curr = 0; curr < list.length; curr++){
          if (list[curr].statistics.points < lowestPts) {
            lowestPts = list[curr].statistics.points
          }}
        setMinPts(lowestPts)
      }
      getMinPoints();
    }
  }, [list])

  useEffect(() => {
    if (list) {
      const getNewList = () => {
        let newList = [];
        for (let curr = 0; curr < list.length; curr++){
          let newObject = {
            key: String(curr),
            name: list[curr].player.name,
            ppg: ((list[curr].statistics.points / list[curr].statistics.appearances).toFixed(1)),
            total: list[curr].statistics.points,
            games: list[curr].statistics.appearances,
            team: list[curr].team.name,
            position: list[curr].player.position
          }
          newList.push(newObject)
        }
        setArr(newList);
      }
      getNewList();
    }
  }, [list])

  useEffect(() => {
    if (arr) {
      const getNewArr = () => {
        let posTemp = ['G', 'F', 'C', 'FG', 'CF']
        let newArr = [0, 0, 0, 0, 0];
        for (let curr = 0; curr < arr.length; curr++) {
          if (list[curr].player.position.includes("FG") === true || list[curr].player.position.includes("GF") === true) {
            newArr[3] += 1
          } else if (list[curr].player.position.includes("CF") === true || list[curr].player.position.includes("FC") === true) {
            newArr[4] += 1
          } else if (list[curr].player.position.includes("G") === true) {
            newArr[0] += 1
          } else if (list[curr].player.position.includes("F") === true) {
            newArr[1] += 1
          } else if (list[curr].player.position.includes("C") === true) {
            newArr[2] += 1
          }
        }
        setPosArr(newArr)
      }
      getNewArr();
    }
  }, [arr])

  useEffect(() => {
    if (posArr) {
      let data = {
        labels: graphLabels,
        datasets: [{
            label: '# of Players',
            data: posArr,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          }]
      }
      setGraphData(data);
    }
  }, [posArr])

  useEffect(() => {
    if (arr) {
      const getNewArr2 = () => {
        let posTemp = ['G', 'F', 'C', 'FG', 'CF']
        let newArr = [0, 0, 0, 0, 0];

        for (let curr = 0; curr < arr.length; curr++) {
          let tempAvg = list[curr].statistics.points;

          if (list[curr].player.position.includes("FG") === true || list[curr].player.position.includes("GF") === true) {
            newArr[3] += tempAvg
          } else if (list[curr].player.position.includes("CF") === true || list[curr].player.position.includes("FC") === true) {
            newArr[4] += tempAvg
          } else if (list[curr].player.position.includes("G") === true) {
            newArr[0] += tempAvg
          } else if (list[curr].player.position.includes("F") === true) {
            newArr[1] += tempAvg
          } else if (list[curr].player.position.includes("C") === true) {
            newArr[2] += tempAvg
          }
        }
        setDataSet(newArr)
      }
      getNewArr2();
    }
  }, [arr])

  useEffect(() => {
    if (dataSet) {
      let data = {
        labels: graphLabels,
        datasets: [
          {
            label: 'Position',
            data: dataSet,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ]
      }
      setGraphData2(data);
    }
  }, [dataSet])

  const graphLabels = ['G', 'F', 'C', 'FG', 'CF'];
  const graphOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Points Per Game by Position',
      },
    },
  };



  return (
    <div className="App">
      <h1>NBA Stat Hub</h1>
      <Row gutter={16}>

        <Col span={8}>
          <Card title="Numbers by Position">
            <p>Guards: <b>{guards}</b></p>
            <p>Forwards: <b>{forwards}</b></p>
            <p>Centers: <b>{centers}</b></p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Mean/Average Points">
            <p>Total Points: <b>{totalPts}</b> </p>
            <p>Average Points: <b>{list && ((totalPts / list.length).toFixed(1))}</b> </p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Ranges of Points">
            <p> Maximum total points: <b>{maxPts}</b></p>
            <p> Minimum total points: <b>{minPts}</b></p>
          </Card>
        </Col>

      </Row>

      <Row gutter={16}>
        <Col span={16}>
          {list && <Table columns={columns} dataSource={arr} onChange={onChange} />}
        </Col>
        <Col span={8}>

          {graphData && <Doughnut data={graphData} />}
          {graphData2 && <Bar options={graphOptions} data={graphData2} /> }
        </Col>

        
        {/*list && Object.entries(list).map(([curr]) =>

          <li key={list[curr].player.name}>
            Player: <b>{list[curr].player.name}  </b>
            Points per game: <b>{(list[curr].statistics.points / 
                              list[curr].statistics.appearances).toFixed(1)}  </b> 
            Total points: <b>{list[curr].statistics.points}  </b> 
            Games Played: <b>{list[curr].statistics.appearances}  </b>
            Team: <b>{list[curr].team.name}  </b> 
          </li>
        )*/}
        
        
        
  
      </Row>
 
    </div>
  )
}

export default App
