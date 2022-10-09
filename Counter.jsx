
import React, { useEffect, useState } from "react";


export default function Counter ({initialValue, stepper}) {
    useEffect(() => {
        console.log(count)

    })
    const handleIncrement = () =>{
        setCount(count += stepper)
    }

    const handleDecrement = () =>{
        setCount(count -= stepper)
    }
    const handleReset = () => {
        setCount(initialValue)
    }

    let [count, setCount] = useState(initialValue)

    return (<div>
    <h1> Counter</h1>
    <h2>{count} </h2>

    <button onClick={ handleIncrement}>+</button>
    <button onClick={ handleDecrement}>-</button>
    <button onClick={ handleReset}>reset</button> 

    {count >= 24 && <p>Achievement unlocked!!</p>}
    </div>)
}