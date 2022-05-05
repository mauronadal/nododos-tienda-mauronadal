import React, { useState } from 'react';

export const ItemCount = ({ value = 0 }) => {
    const [counter, setCounter] = useState(value);

    const handleUp = () => setCounter((counterPref) => counterPref + 1);
    const handleDown = () => setCounter((counterPref) => counterPref - 1);
    const handleReset = () => setCounter(value);

    return (
        <>
            <h1>Contador</h1>
            <div>
                <h2>{counter}</h2>
                <div>
                    <button onClick={handleDown}>-1</button>
                    <button onClick={handleReset}>Borrar</button>
                    <button onClick={handleUp}>+1</button>

                </div>
            </div>
        </>
    );
};

export default ItemCount;