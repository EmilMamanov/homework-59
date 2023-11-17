import React from 'react';

interface LoadJokeButtonProps {
    onClick: () => void;
    buttonText: string;
}

const LoadJokeButton: React.FC<LoadJokeButtonProps> = ({ onClick, buttonText }) => {
    return (
        <button onClick={onClick} style={{ margin: '10px' }}>
            {buttonText}
        </button>
    );
};

export default LoadJokeButton;