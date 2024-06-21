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
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-2">
                <h1 class="block text-lg font-bold mb-2">Player {player.id + 1}</h1>
                Current Score: {player.score}
            </div>
            <div class="mb-2">
                <div>
                    <label class="block text-black-700 text-sm font-bold mb-2">New Score: </label>
                </div>      
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={score} onChange={handleScore} /> 
            </div>
            <div class="mb-2">
                <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleButtonClick}>Update</button>
            </div>
        </div>
    )

}

export default PlayerScoreForm;