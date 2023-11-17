import React, { useState } from 'react';
import MovieItem from './components/MovieItem/MovieItem';
import './App.css';

const App: React.FC = () => {
    const [movies, setMovies] = useState([
        { id: 1, title: 'The Fifth Estate' },
        { id: 2, title: 'Matrix' },
        { id: 3, title: 'Interstellar' },
    ]);

    const handleAddMovie = (newTitle: string) => {
        const newMovie = {
            id: Math.random(),
            title: newTitle,
        };
        setMovies((prevMovies) => [...prevMovies, newMovie]);
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

    return (
        <div>
            <div>
                <input type="text" placeholder="Enter movie title" />
                <button onClick={() => handleAddMovie('New Movie')}>Add</button>
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
        </div>
    );
};

export default App;