import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

function NoteListArchive({ notes, onDelete, onArchive }) {
    const archives = notes.filter((note) => note.archived == true);
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
                <p>Archives Not found</p>
            )}
        </div>
    );
}

NoteListArchive.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
};

export default NoteListArchive;
