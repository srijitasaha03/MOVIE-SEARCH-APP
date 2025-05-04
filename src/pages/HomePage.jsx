import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import fetchMovies from '../services/api';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (searchTerm) => {
        setLoading(true);
        setError('');
        try {
            const data = await fetchMovies(searchTerm);
            if (data.Response === 'True') {
                setMovies(data.Search);
            } else {
                setError(data.Error);
                setMovies([]);
            }
        } catch (err) {
            setError('An error occurred while fetching movies.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Movie Search App</h1>
            <SearchBar onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <MovieList movies={movies} />
        </div>
    );
};

export default HomePage;