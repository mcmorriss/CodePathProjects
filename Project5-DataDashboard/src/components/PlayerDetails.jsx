import { Descriptions, Row, Col } from 'antd';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { playerList } from './players';

const PlayerDetails = () => {
    const params = useParams();
    const { id } = params

    const [player, setPlayer] = useState(null)
    const [playerDetails, setPlayerDetails] = useState(null)


    useEffect(() => {
        if (id) {
            const getListPlayers = () => {
                for (let i = 0; i < playerList.length; i++){
                    if ( (String(playerList[i].id)) == id ) {
                        setPlayerDetails(playerList[i])
                    }
                }}
                

            getListPlayers();
            console.log(id)

        }
    }, [])

    useEffect(() => {
        if (playerDetails) {
            const getPlayerName = () => {
                setPlayer(playerDetails.name)
            }
            getPlayerName();
        }
    }, [playerDetails])

    return (
        <div>
            
            {player && 
                <div>
                    <h2>Full Details for <u>{player}</u></h2>
                    <Row gutter={16}>
                        <Col span={8}></Col>
                        <Col span={8}>
                            <Descriptions title={playerDetails.name}>
                                <Descriptions.Item label="Full Name" span={3}>{playerDetails.name}</Descriptions.Item>
                                <Descriptions.Item label="Points Per Game" span={3}>{playerDetails.ppg}</Descriptions.Item>
                                <Descriptions.Item label="Total Points" span={3}>{playerDetails.total}</Descriptions.Item>
                                <Descriptions.Item label="Games Played" span={3}>{playerDetails.games}</Descriptions.Item>
                                <Descriptions.Item label="Current Team" span={3}>{playerDetails.team}</Descriptions.Item>
                                <Descriptions.Item label="Position" span={3}>{playerDetails.position}</Descriptions.Item>
                                <Descriptions.Item label="Wikipedia" span={3}><a href={playerDetails.wikiLink}>{playerDetails.wikiLink}</a></Descriptions.Item>
                                <Descriptions.Item label="YouTube Highlights" span={3}><a href={playerDetails.youtubeLink}>{playerDetails.youtubeLink}</a></Descriptions.Item>
                            </Descriptions>
                        </Col>
                    </Row>
                    
                    {/*<h1>Full Details for <u>{player}</u></h1>
                    <ul>
                        <li>Name: {playerDetails.name}</li>
                        <li>Points per game: {playerDetails.ppg}</li>
                        <li>Total Points: {playerDetails.total}</li>
                        <li>Games Played: {playerDetails.games}</li>
                        <li>Current Team: {playerDetails.team}</li>
                        <li>Position: {playerDetails.position}</li>
                        <li>Wikipedia: <a href={playerDetails.wikiLink}>{playerDetails.wikiLink}</a></li>
                        <li>YouTube Highlights: <a href={playerDetails.youtubeLink}>{playerDetails.youtubeLink}</a></li>
            </ul>*/}
                </div>
            }
        </div>
    )
    }

export default PlayerDetails