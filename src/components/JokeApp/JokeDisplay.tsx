import React from 'react';

interface JokeDisplayProps {
    joke: string;
}

const JokeDisplay: React.FC<JokeDisplayProps> = ({ joke }) => {
    return (
        <div>
            <h3>Joke:</h3>
            <p>{joke}</p>
        </div>
    );
};

export default JokeDisplay;