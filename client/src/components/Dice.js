// client/src/components/Dice.js
import React, { useState } from 'react';

const Dice = ({ onRoll }) => {
    const [value, setValue] = useState(1);

    const rollDice = () => {
        const newValue = Math.floor(Math.random() * 6) + 1;
        setValue(newValue);
        onRoll(newValue);
    };

    return (
        <div>
            <div className="dice">
                {value}
            </div>
            <button onClick={rollDice}>Roll Dice</button>
        </div>
    );
};

export default Dice;

