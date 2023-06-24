import React from 'react';
import PropTypes from 'prop-types';

function NoteItemFooter({ id, onDelete, onArchive }) {
    return (
        <div className="note-item__footer">
            <img
                src="/images/archive.png"
                alt="Archive"
                onClick={() => onArchive(id)}
                className="note-item__button"
            />
            <img
                src="/images/trash.png"
                alt="Delete"
                onClick={() => onDelete(id)}
                className="note-item__button"
            />
        </div>
    );
}

NoteItemFooter.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
};

export default NoteItemFooter;
