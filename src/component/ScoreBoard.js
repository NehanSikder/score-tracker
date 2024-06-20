import { useState } from "react";
import PlayerScoreForm from "./PlayerScoreForm";


function ScoreBoard({players, updatePlayer}){
    
    const [id, setId] = useState(0)

    function updateScore(score) {
        updatePlayer(id, score)
        setId((id + 1) % players.length)
    }

    function renderScore(scores){
        var text = ""
        scores.forEach(element => {
            text += element + " - "
        });
        return text

    }

    return (
        <div>
            <div>
                <h1>Score Board</h1>
                {players.map((player) => {
                    return <div>
                        Player {player.id + 1} - 
                        {renderScore(player.scores)}
                        {player.score}
                        </div>
                })}
            </div>
            <div>
                <PlayerScoreForm updateScore={updateScore} player={players[id]}/>
            </div>
        </div>
    )
}

export default ScoreBoard;