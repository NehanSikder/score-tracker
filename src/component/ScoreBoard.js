import { useState } from "react";
import PlayerScoreForm from "./PlayerScoreForm";


function ScoreBoard({players, updatePlayer}){
    
    const [id, setId] = useState(0)
    // update values
    
    const [nextId, setNextId] = useState(0)
    const [scoreIndex, setScoreIndex] = useState(null)
    const [oldScore, setOldScore] = useState("")

    function updateScore(score) {
        updatePlayer(id, score)
        setId((id + 1) % players.length)
    }

    return (
        <div>
            <div class="mb-3 bg-white shadow-md rounded px-8 pt-6 pb-8">
                <table class="table-auto text-center">
                    <thead class="border-b border-neutral-200 font-medium dark:border-white/10">
                        <tr>
                            <th>Player</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player) => (
                            <tr class="border-b border-neutral-200 dark:border-white/10">
                                <td>Player {player.id + 1}</td>
                                <td class="whitespace-nowrap px-2 py-2">{player.score}</td>
                                {player.scores.map((val, scoreIndex) => (
                                    <td class="whitespace-nowrap px-2">
                                        <button onClick={()=> {
                                            setNextId((id + 1) % players.length)
                                            setScoreIndex(scoreIndex)
                                            setOldScore(val)
                                            setId(player.id)
                                        }}>{val}</button>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                    </table>
            </div>
            <div>
                <PlayerScoreForm updateScore={updateScore} player={players[id]} scoreIndex={scoreIndex}/>
            </div>
        </div>
    )
}

export default ScoreBoard;