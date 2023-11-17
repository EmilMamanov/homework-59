import React, { useState, useEffect } from 'react';
import JokeDisplay from './JokeDisplay';
import LoadJokeButton from './LoadJokeButton';
import { getJoke } from './jokeApi';

const JokeApp: React.FC = () => {
    const [jokes, setJokes] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await loadJokes(1);
            } catch (error) {
                console.error('Error loading jokes:', error);
            }
        };
        fetchData().then();
    }, []);

    const loadJokes = async (numberOfJokes: number) => {
        try {
            const jokePromises = Array.from({ length: numberOfJokes }, () => getJoke());
            const newJokes = await Promise.all(jokePromises);
            setJokes(newJokes.map((jokeData) => jokeData.value));
        } catch (error) {
            console.error('Error loading jokes:', error);
        }
    };

    return (
        <div>
            <h2 className="app-title">Joke App</h2>
            {jokes.map((joke, index) => (
                <JokeDisplay key={index} joke={joke} />
            ))}
            <LoadJokeButton onClick={() => loadJokes(1)} buttonText="Take 1 Joke" />
            <LoadJokeButton onClick={() => loadJokes(5)} buttonText="Take 5 Jokes" />
        </div>
    );
};

export default JokeApp;