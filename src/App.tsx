import React, {useEffect, useState} from 'react';
import MovieItem from './components/MovieItem/MovieItem';
import './App.css';
import JokeApp from './components/JokeApp/JokeApp';
import {getJoke} from "./components/JokeApp/jokeApi.ts";
import JokeDisplay from "./components/JokeApp/JokeDisplay.tsx";
import LoadJokeButton from "./components/JokeApp/LoadJokeButton.tsx";

const App: React.FC = () => {
    const [movies, setMovies] = useState([
        { id: 1, title: 'Matrix' },
        { id: 2, title: 'Spider-Man 2' },
        { id: 3, title: 'The Fifth Estate' },
    ]);

    const [newMovieTitle, setNewMovieTitle] = useState(''); // Добавлено новое состояние

    const handleAddMovie = () => {
        const newMovie = {
            id: Math.random(),
            title: newMovieTitle,
        };
        setMovies((prevMovies) => [...prevMovies, newMovie]);
        setNewMovieTitle('');
    };

    const handleDeleteMovie = (id: number) => {
        setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    };

    const handleEditMovie = (id: number, updatedTitle: string) => {
        setMovies((prevMovies) =>
            prevMovies.map((movie) =>
                movie.id === id ? { ...movie, title: updatedTitle } : movie
            )
        );
    };

    const JokeApp: React.FC = () => {
        const [joke, setJoke] = useState('');

        useEffect(() => {
            loadJoke();
        }, []);

        const loadJoke = async () => {
            try {
                const jokeData = await getJoke();
                setJoke(jokeData.value);
            } catch (error) {
                console.error('Error loading joke:', error);
            }
        };

        return (
            <div>
                <h2>Joke App</h2>
                here will be app and button
            </div>
        );
    };

    return (
        <div>
            <section>
            <div>
                <input
                    type="text"
                    placeholder="Enter movie title"
                    value={newMovieTitle}
                    onChange={(e) => setNewMovieTitle(e.target.value)}
                />
                <button onClick={handleAddMovie}>Add</button>
            </div>
            <div>
                <h2>To watch list:</h2>
                {movies.map((movie) => (
                    <MovieItem
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        onDelete={handleDeleteMovie}
                        onEdit={handleEditMovie}
                    />
                ))}
            </div>
            </section>

        </div>
    );
};

export default App;