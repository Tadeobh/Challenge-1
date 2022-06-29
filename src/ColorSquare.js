const ColorSquare = ({ color }) => {
    return (
        <div className="ColorSquare" style={{backgroundColor: color}}>
            <p
                style={{color: color==="black" ? "white" : null}}
            >{color ? color : "Empty Value"}</p>
        </div>
    );
};

export default ColorSquare;