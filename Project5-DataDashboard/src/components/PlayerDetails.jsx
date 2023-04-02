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
            <h1>Testing</h1>
            {player && 
                <div>
                    <h1>Full Details for {player}</h1>
                    <ul>
                        <li>Name: {playerDetails.name}</li>
                        <li>Points per game: {playerDetails.ppg}</li>
                        <li>Total Points: {playerDetails.total}</li>
                        <li>Games Played: {playerDetails.games}</li>
                        <li>Current Team: {playerDetails.team}</li>
                        <li>Position: {playerDetails.position}</li>
                        <li>Wikipedia: <a href={playerDetails.wikiLink}>{playerDetails.wikiLink}</a></li>
                        <li>YouTube Highlights: <a href={playerDetails.youtubeLink}>{playerDetails.youtubeLink}</a></li>
                    </ul>
                </div>
            }
        </div>
    )
    }

export default PlayerDetails