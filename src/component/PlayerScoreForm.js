import { useState } from "react";

function PlayerScoreForm({ updateScore, player }){

    const [score, setScore] = useState("")

    const handleScore = (event) => {
        setScore(event.target.value)
    }

    const handleButtonClick = () => {
        const intScore = parseInt(score)
        if (isNaN(intScore)) {
            // TODO: Error handling
            return
        }
        updateScore(intScore)

    }


    return (
        <div>
            <h2>Player {player.id + 1}</h2>
            <div>
                Current Score: {player.score}
            </div>
            <div>
                <div>
                    <label>New Score: </label>
                </div>      
                <input type="number" value={score} onChange={handleScore} /> 
            </div>
            <div>
                <button onClick={handleButtonClick}>Update</button>
            </div>
        </div>
    )

}

export default PlayerScoreForm;