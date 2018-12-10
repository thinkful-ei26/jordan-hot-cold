import React from 'react';
import Guess from './Guess';

export default function Guesses() {
    const guessData = [
        {currentGuess: 10, recentGuess: 5},
        {currentGuess: 20, recentGuess: 15},
        {currentGuess: 30, recentGuess: 25}
    ];

    const userGuess = guessData.map(guess => (
        <li><Guess current={userGuess.currentGuess} Guess recent={userGuess.recentGuess}/></li>
    ));
    return <ul>{userGuess}</ul>
}
