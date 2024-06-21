import { useState } from "react";

function GameSettingsForm({getGameSettings}){
    
    const [numberOfPlayers, setNumberOfPlayers] = useState("1");
    const [startingScore, setStartingScore] = useState("0");
    const [subtract, setSubtract] = useState(false);
    const [numberOfPlayersHelpMessage, setNumberOfPlayersHelpMessage] = useState("Min: 1 Max: 10")
    const [startingScoresHelpMessage, setStartingScoresHelpMessagee] = useState("0")


    const subtractHandler = () => {
      setSubtract(!subtract)
    }

    const handleNumberOfPlayers = (event) => {
        setNumberOfPlayers(event.target.value)
    }

    const handleStartingScore = (event) => {
        setStartingScore(event.target.value)
    }

    const handleButtonClick = () => {
        // get number of plays
        // convert number of players to int
        // throw error if number of players is not valid int
        // pass number of players to some other component
        const intNumberOfPlayers = parseInt(numberOfPlayers, 0);
        var numberOfPlayersErrorMessage = "Please enter between 1 and 10";
        var numberOfPlayersInputError = false;
        if (isNaN(intNumberOfPlayers) || intNumberOfPlayers < 1 || intNumberOfPlayers > 10){
          setNumberOfPlayersHelpMessage(numberOfPlayersErrorMessage)
          numberOfPlayersInputError = true;
          setNumberOfPlayers("");
        }
        var startingScoreErrorMessage = "Please enter valid number";
        var startingScoreInputError = false;
        const intStartingScore = parseInt(startingScore, 0);
        if (isNaN(intStartingScore)) {
          setStartingScoresHelpMessagee(startingScoreErrorMessage);
          startingScoreInputError = true;
          setStartingScore("")
        }
        if (!numberOfPlayersInputError && !startingScoreInputError){
          getGameSettings(intNumberOfPlayers, intStartingScore, subtract)
        }
    }
    
    return (
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-3">
              <label class="block text-black-700 text-sm font-bold mb-2">Number of Players </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={numberOfPlayers} onChange={handleNumberOfPlayers} placeholder={numberOfPlayersHelpMessage}/>
            </div>
            <div class="mb-3">
              <label class="block text-black-700 text-sm font-bold mb-2">Starting Score </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={startingScore} onChange={handleStartingScore} placeholder={startingScoresHelpMessage}/>
            </div>
            <div class="flex mb-2">
              <label class="ms-0 block text-black-700 text-sm font-bold">Subtract Score</label>          
              <input class="ms-1 py-2 px-3" type="checkbox" checked={subtract} onChange={subtractHandler}/>

            </div>

            <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleButtonClick}>Start</button>
        </div>
    );
}

export default GameSettingsForm;