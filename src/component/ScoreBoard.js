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
            <div class="mb-3 bg-white shadow-md rounded px-8 pt-6 pb-8">
                <table class="table-auto text-center">
                    <thead class="border-b border-neutral-200 font-medium dark:border-white/10">
                        <tr>
                            <th>Player</th>
                            <th></th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player) => {
                            return <tr class="border-b border-neutral-200 dark:border-white/10">
                                        <td class="whitespace-nowrap font-medium">Player {player.id + 1}</td>
                                        <td class="whitespace-nowrap px-4">{renderScore(player.scores)}</td>
                                        <td class="whitespace-nowrap px-4">{player.score}</td>
                                </tr>
                        })}
                    </tbody>
                    </table>
            </div>
            <div>
                <PlayerScoreForm updateScore={updateScore} player={players[id]}/>
            </div>
        </div>
    )
}

export default ScoreBoard;