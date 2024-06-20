import { useState } from "react";

function GameSettingsForm({getGameSettings}){
    
    const [numberOfPlayers, setNumberOfPlayers] = useState("");
    const [startingScore, setStartingScore] = useState("");
    const [subtract, setSubtract] = useState(false);

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
        if (!isNaN(intNumberOfPlayers)) {
          console.log('Integer value:', intNumberOfPlayers);
          // You can perform other actions with the intValue here
        } else {
          console.log('Invalid input, please enter a valid integer.');
        }
        const intStartingScore = parseInt(startingScore, 0);
        if (!isNaN(intStartingScore)) {
          console.log('Integer value:', intStartingScore);
          // You can perform other actions with the intValue here
        } else {
          console.log('Invalid input, please enter a valid integer.');
        }
        getGameSettings(intNumberOfPlayers, intStartingScore, subtract)



    }
    
    return (
        <div>
            <div>
              <label>Number of Players: </label>
            </div>
            <div>
              <input type="number" value={numberOfPlayers} onChange={handleNumberOfPlayers} />
            </div>
            <div>
              <label>Starting Score: </label>
            </div>
            <div>
              <input type="number" value={startingScore} onChange={handleStartingScore} />
            </div>
            <div>
              <label>Subtract Score: </label>
            </div>
            <div>
              <input type="checkbox" checked={subtract} onChange={subtractHandler}/>
            </div>

            <button onClick={handleButtonClick}>Start</button>
        </div>
    );
}

export default GameSettingsForm;