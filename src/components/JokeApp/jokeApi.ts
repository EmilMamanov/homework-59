const JOKE_API_URL = 'https://api.chucknorris.io/jokes/random';

export const getJoke = async () => {
    const response = await fetch(JOKE_API_URL);

    if (!response.ok) {
        throw new Error(`Failed to fetch joke: ${response.status}`);
    }

    return await response.json();
};