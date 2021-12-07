import React, { useRef, useState, useEffect } from 'react';
import './calc.css';

function Calculate(){
    const[result, setResult] = useState("");
    const inputRef = useRef(null);
    useEffect(() => inputRef.current.focus());
    function handleClick(event){
        setResult(result.concat(event.target.name));
    }
    function clear() {
        setResult("");
      }
      function backspace() {
        setResult(result.slice(0, -1));
      }
      function calc() {
        try {
          setResult(eval(result).toString());
        } catch (error) {
          setResult("Error");
        }
      }
    return(
        <div id="container">
            <form>
        <input  id="input" className="entry text-right" value={result} ref={inputRef}/>
        </form>
            <div className="calcul-button">
            <button id="plus" name="+" onClick={handleClick}>+</button>
            <button id="minus" name="-" onClick={handleClick}>-</button>
            <button id="multiply" name="*" onClick={handleClick}>*</button>
            <button id="divide" name="/" onClick={handleClick}>/</button>
            <button id="block1" name="1" onClick={handleClick}>1</button>
            <button id="block2" name="2" onClick={handleClick}>2</button>
            <button id="block3" name="3"onClick={handleClick}>3</button>
            <button id="block4" name="4" onClick={handleClick}>4</button>
            <button id="block5"  name="5"onClick={handleClick}>5</button>
            <button id="block6" name="6" onClick={handleClick}>6</button>
            <button id="block7" name="7" onClick={handleClick}>7</button>
            <button id="block8" name="8" onClick={handleClick}>8</button>
            <button id="block9" name="9" onClick={handleClick}>9</button>
            <button id="block0" name="0" onClick={handleClick}>0</button>
            <button id="dot" name="." onClick={handleClick}>.</button>
            <button id="delete"  onClick={backspace}>Del</button>
            <button id="clr"  onClick={clear}>reset</button>
            <button id="ans" onClick={calc}>=</button>
        </div>
    </div>
    )
}

export default Calculate;