import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Games = () => {
  const gameStore = useSelector((store) => store.game);

  const [game, setGame] = useState("");
  const[player,setPlayer]= useState('')

  const dispatch = useDispatch();

  return (
    <>
      Name of the game: {gameStore.gameName}
      <br />
      Name of the player: {gameStore.playerName}
      <br />
      <input
        type={"text"}
        placeholder="enter game name here"
        onChange={(e) => setGame(e.target.value)}
      />
      <input
        type={"text"}
        placeholder="enter player name here"
        onChange={(e) => setPlayer(e.target.value)}
      />
      <button
        className="btn btn-success mx-2"
        onClick={() => dispatch({ type: "UPDATE_GAME", payload:game,new:player})}
      >
        Update
      </button>
    </>
  );
};

export default Games;
