import React, { useState } from 'react';

interface MovieItemProps {
    id: number;
    title: string;
    onDelete: (id: number) => void;
    onEdit: (id: number, updatedTitle: string) => void;
}

const MovieItem: React.FC<MovieItemProps> = ({ id, title, onDelete, onEdit }) => {
    const [editedTitle, setEditedTitle] = useState(title);

    const handleEdit = () => {
        onEdit(id, editedTitle);
    };

    return (
        <div>
            <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
            />
            <button onClick={handleEdit}>Save</button>
            <button
                style={{ cursor: 'pointer' }}
                onClick={() => onDelete(id)}
            >
                X
            </button>
        </div>
    );
};

export default MovieItem;