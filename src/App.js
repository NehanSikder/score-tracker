// import { useState } from 'react';
import { useState } from 'react';
import './App.css';
import GameSettingsForm from './component/GameSettingsForm';
import ScoreBoard from './component/ScoreBoard';

function App() {

  // const [gameSettings, setGameSettings] = useState({numberOfPlayers: 0, startingScore: 310})

  const [gameConfigured, setGameConfigured] = useState(false)
  const [players, setPlayers] = useState([]);
  const [subtract, setSubtract] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);


  function getGameSettings(numberOfPlayers, startingScore, subtract){
    setGameConfigured(true)
    var tmp = [];
    for (var i = 0;i < numberOfPlayers; i++){
      tmp.push({id: i, score: startingScore, scores: [startingScore]})
    }
    setPlayers(tmp)
    setSubtract(subtract)
    setShowReset(true)
  }

  function updatePlayer(id, score, scoreIndex){
    if (scoreIndex != null){
      if (subtract) {
        players[id].score = players[id].score + players[id].scores[scoreIndex] - score
      } else{
        players[id].score = players[id].score - players[id].scores[scoreIndex] + score
      }
      let playersCopy = [...players];
      let player = {...playersCopy[id]};
      player.scores[scoreIndex] = score
      playersCopy[id] = player
      setPlayers(playersCopy)
    } else {
      if (subtract) {
        players[id].score = players[id].score - score
      } else {
        players[id].score = players[id].score + score
      }
      let playersCopy = [...players];
      let player = {...playersCopy[id]};
      player.scores.push(score)
      playersCopy[id] = player
      setPlayers(playersCopy)
    }
      
  }

  const handleReset = () =>{
    setConfirmReset(!confirmReset)
    setShowReset(false)

  }

  const cancelReset = () => {
    setConfirmReset(false)
    setShowReset(true)
  }

  const reset = () => {
    setConfirmReset(false)
    setGameConfigured(false)
    setShowReset(false)
  }

  const renderConfirm = () => {
    return  (
      <div class="flex space-x-2">
        <button class="mb-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleReset}>Reset</button>
        <span class="align-center">Are you sure? </span>
        <button class="mb-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={reset}>Yes</button>
        <button class="mb-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={cancelReset}>No</button>
      </div>
    )
  }

  return (
    <div className="App">
      <div class="flex justify-center items-center h-screen bg-orange-300">
        <div class="xs:max-w-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
          {!showReset && <h1 class="mb-1 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Score Tracker</h1>}
          {!gameConfigured && <GameSettingsForm getGameSettings={getGameSettings}/>}
          {showReset && <div>
            <h1 class="mb-1 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Score Tracker</h1>
            <button class="mb-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleReset}>Reset</button>
            
            </div>}
          {confirmReset && renderConfirm()}
          
          {gameConfigured && <ScoreBoard players={players} updatePlayer={updatePlayer}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
