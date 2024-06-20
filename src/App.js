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
      {!gameConfigured && <GameSettingsForm getGameSettings={getGameSettings}/>}
      {gameConfigured && <ScoreBoard players={players} updatePlayer={updatePlayer}/>}
    </div>
  );
}

export default App;
