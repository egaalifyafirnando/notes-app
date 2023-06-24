import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive }) {
    const archives = notes.filter((note) => note.archived == false);
    return (
        <div className="note-list">
            {archives.length !== 0 ? (
                archives.map((note) => (
                    <NoteItem
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        onArchive={onArchive}
                        {...note}
                    />
                ))
            ) : (
                <p>Notes Not found</p>
            )}
        </div>
    );
}

export default NoteList;
