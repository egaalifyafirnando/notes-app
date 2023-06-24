import React from 'react';

function NoteItemFooter({ id, onDelete, onArchive }) {
    return (
        <div className="note-item__footer">
            <img
                src="/images/archive.png"
                alt=""
                onClick={() => onArchive(id)}
                className="note-item__button"
            />
            <img
                src="/images/trash.png"
                alt=""
                onClick={() => onDelete(id)}
                className="note-item__button"
            />
        </div>
    );
}

export default NoteItemFooter;
