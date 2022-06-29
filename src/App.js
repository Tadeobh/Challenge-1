import ColorSquare from "./ColorSquare";
import ColorInput from "./ColorInput";
import { useState } from "react"

function App() {

  const [color, setColor] = useState('');

  return (
    <div className="App">
      <ColorSquare
        color={color}
      />
      <ColorInput
        color={color}
        setColor={setColor}
      />
    </div>
  );
}

export default App;
