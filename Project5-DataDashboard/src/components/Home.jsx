import { useState, useEffect } from 'react'
import { Card, Col, Row, Table, Radio, Descriptions, Statistic } from 'antd';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LinearScale, CategoryScale, BarElement, Title } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = () => {
  const [list, setList] = useState(null);
  const [arr, setArr] = useState(null);
  const [posArr, setPosArr] = useState(null);
  const [graphData, setGraphData] = useState(null);
  const [graphData2, setGraphData2] = useState(null);
  const [dataSet, setDataSet] = useState(null);
  const [tableData, setTableData] = useState(null);

  const [selectedGraph, setSelectedGraph] = useState('doughnut');

  const [guards, setGuards] = useState(0);
  const [forwards, setForwards] = useState(0.0);
  const [centers, setCenters] = useState(0);
  const [totalPts, setTotalPts] = useState(0);
  const [maxPts, setMaxPts] = useState(1000);
  const [minPts, setMinPts] = useState(1500);

  const options = {
    method: 'GET',
	  headers: {
		  'X-RapidAPI-Key': 'b19c45a3b7msh06cb7a867df7381p1aaf9fjsnabe75abb5788',
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
      title: 'Details',
      dataIndex: 'id',
      render: (id) => <Link to={`/player/${id}`} >🔗</Link>,
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
    /*{
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
    },*/
  ]

  const onChange = (pagination, filters, sorter, extra, render) => {
    console.log('params', pagination, filters, sorter, extra, render)
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
    // Getting custom array of data objects for the table data.

    // 🔗 </a>
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
            position: list[curr].player.position,
            id: list[curr].player.id,
            wikiLink: `https://en.wikipedia.org/wiki/${(list[curr].player.name).replace(" ", "_")}`,
            youtubeLink: `https://www.youtube.com/results?search_query=${(list[curr].player.name).replace(" ", "+")}+highlights`,

          }
          newList.push(newObject)
        }
        console.log(newList)
        setArr(newList);
      }
      getNewList();
    }
  }, [list])

  useEffect(() => {
    // Getting custom data array for doughnut graph.
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
    // Creating custom array for graph labels.
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
    // Creating custom data entry array for bar graph with react-chartjs-2.
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
            label: 'Points',
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
        text: 'Total Points by Position',
      },
    },
  };

  const onChangeButton = ({ target: { value } }) => {
    setSelectedGraph(value);
  }

  return (
    <div>
        <Row gutter={16}>
        <Col span={8}>
          <Card title="Numbers by Position">
            <Statistic title="Guards:" value={guards} />
            <Statistic title="Forwards:" value={forwards} />
            <Statistic title="Centers:" value={centers} />
            {/*<p>Guards: <b>{guards}</b></p>
            <p>Forwards: <b>{forwards}</b></p>
            <p>Centers: <b>{centers}</b></p>*/}
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
        <Col span={12}>
        
          {list && <Table 
                        columns={columns} 
                        dataSource={arr} 
                        onChange={onChange}
                        style={{ marginTop: '50px' }} 
                    />}
        </Col>
        <Col span={12}>

            <Radio.Group
                onChange={onChangeButton}
                value={selectedGraph}
                style={{
                    marginBottom: 4,
                }}
            >
                <Radio.Button value="doughnut">Doughnut Graph</Radio.Button>
                <Radio.Button value="bar">Bar Graph</Radio.Button>
            </Radio.Group>

          <div>
            {graphData && selectedGraph == "doughnut" && <Doughnut data={graphData}/>}
            {graphData2 && selectedGraph == "bar" && <Bar options={graphOptions} data={graphData2} /> }
          </div>

          <div>
            {graphData && selectedGraph == "doughnut" && 
                <Descriptions title="Number of Players by Position" bordered style={{ marginTop: '20px' }}>
                    <Descriptions.Item label='Guards' span={3}> {posArr[0]} </Descriptions.Item>
                    <Descriptions.Item label='Forwards' span={3}> {posArr[1]} </Descriptions.Item>
                    <Descriptions.Item label='Centers' span={3}> {posArr[2]} </Descriptions.Item>
                    <Descriptions.Item label='Forward-Guards' span={3}> {posArr[3]} </Descriptions.Item>
                    <Descriptions.Item label='Center-Forwards' span={3}> {posArr[4]} </Descriptions.Item>
                </Descriptions>
            }
            {graphData2 && selectedGraph == "bar" && 
                <Descriptions title="Total Number of Points by Position" bordered style={{ marginTop: '20px' }} >
                    <Descriptions.Item label='Guards' span={3}> {dataSet[0]} </Descriptions.Item>
                    <Descriptions.Item label='Forwards' span={3}> {dataSet[1]} </Descriptions.Item>
                    <Descriptions.Item label='Centers' span={3}> {dataSet[2]} </Descriptions.Item>
                    <Descriptions.Item label='Forward-Guards' span={3}> {dataSet[3]} </Descriptions.Item>
                    <Descriptions.Item label='Center-Forwards' span={3}> {dataSet[4]} </Descriptions.Item>
                </Descriptions>
            }

          </div>
          <div >
            
          </div>
        </Col>
      </Row>

    </div>
  )
}

export default Home