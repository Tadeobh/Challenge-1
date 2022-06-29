const ColorInput = ({ color, setColor }) => {
    
    
    
    return (
        <input
            autoFocus
            autoComplete="off"
            id="ColorInput"
            type="text"
            placeholder="Add color name"
            value={color}
            onChange={(e) => setColor(e.target.value)}
        />
    );
};

export default ColorInput;