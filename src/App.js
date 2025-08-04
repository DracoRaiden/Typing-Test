import "./App.css";
import "./css/Keypad.css";
// import Keypad from "./Componenets/Keypad";
import { useState, useRef, useEffect } from "react";

function Keypad() {
  const [hasStarted, setHasStarted] = useState(false);
  const [speed, setSpeed] = useState(null);
  const keyCountRef = useRef(0);
  const timerRef = useRef(null);

  function handleTyping() {
    keyCountRef.current += 1;
    if (!hasStarted) {
      setHasStarted(true);
      timerRef.current = setTimeout(() => {
        let text = document.getElementById("keypad-entry");
        text.disabled = true;
        const totalKeys = keyCountRef.current;
        const kps = totalKeys / 5;
        setSpeed(kps.toFixed(2));
      }, 5000);
    }
  }

  function handleClick() {
    setHasStarted(false);
    setSpeed(null);
    keyCountRef.current = 0;
    timerRef.current = null;
    let text = document.getElementById("keypad-entry");
    text.value = "";
    text.disabled = false;
  }

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
      {speed != null && <p>{speed} characters per second</p>}

      <button onClick={handleClick} className="reset-btn">
        Reset
      </button>
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
