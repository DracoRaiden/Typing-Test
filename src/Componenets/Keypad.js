import "../css/Keypad.css";

export default function Keypad() {
  return (
    <div className="keypad">
      <label for="keypad-entry">Enter the above text here:</label>
      <textarea
        id="keypad-entry"
        name="keypad-entry"
        placeholder="Start typing here..."
        rows={6}
        cols={90}
      ></textarea>
    </div>
  );
}
