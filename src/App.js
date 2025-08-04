import "./App.css";
import "./css/Keypad.css";
// import Keypad from "./Componenets/Keypad";
import { useState, useRef, useEffect } from "react";

function Keypad() {
  const [hasStarted, setHasStarted] = useState(false);
  const [speed, setSpeed] = useState(null);
  const keyCountRef = useRef(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  function handleTyping() {
    keyCountRef += 1;
    if (!hasStarted) {
      setHasStarted(true);
    }
  }

  function stopWatch() {}
  return (
    <div className="keypad">
      <label for="keypad-entry">Enter the above text here:</label>
      <textarea
        id="keypad-entry"
        name="keypad-entry"
        placeholder="Start typing here..."
        rows={6}
        cols={90}
        onKeyDown={handleTyping}
      ></textarea>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Typing Test</h1>
      <p className="dummy-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Keypad />
    </div>
  );
}

export default App;
