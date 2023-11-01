import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  // alternative will be the useRef for useState
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  // const [submitted, setSubmitted] = useState(false);
  // function handleChange(event) {
  //   // setSubmitted(false);
  //   setEnteredPlayerName(event.target.value);
  //   // console.log(event.target.value);
  // }
  function handleClick() {
    // setSubmitted(true);
    // ref value will be a js object with a current proprietie with the input
    setEnteredPlayerName(playerName.current.value);
    // js is about declaritive code, not DOM manipulation
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>
        Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}
      </h2>
      <p>
        <input
          ref={playerName}
          type="text"
          // onChange={handleChange}
          // value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
