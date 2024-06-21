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


  function getGameSettings(numberOfPlayers, startingScore, subtract){
    setGameConfigured(true)
    var tmp = [];
    for (var i = 0;i < numberOfPlayers; i++){
      tmp.push({id: i, score: startingScore, scores: []})
    }
    setPlayers(tmp)
    setSubtract(subtract)
  }

  function updatePlayer(id, score){
    if (subtract) {
      players[id].score = players[id].score - score
    } else {
      players[id].score = players[id].score + score
    }
      // players[id].scores.push(score)
      // need to rerender her

      let playersCopy = [...players];
      console.log(playersCopy)
      console.log(players)
      let player = {...playersCopy[id]};
      player.scores.push(score)
      playersCopy[id] = player
      setPlayers(playersCopy)
  }

  return (
    <div className="App">
      <div class="flex justify-center items-center h-screen bg-orange-300">
        <div>
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Score Tracker</h1> 
          {!gameConfigured && <GameSettingsForm getGameSettings={getGameSettings}/>}
          {gameConfigured && <ScoreBoard players={players} updatePlayer={updatePlayer}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
