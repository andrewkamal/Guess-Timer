import { useState, useRef } from "react";
export default function Player() {
  const playerName = useRef();
  const [player, setPlayer] = useState(null);

  function updatePlayer() {
    setPlayer(playerName.current.value);
    playerName.current.value='';
  }

  return (
    <section id="player">
      <h2>Welcome {player ?? 'unknown player'}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={updatePlayer}>Set Name</button>
      </p>
    </section>
  );
}
