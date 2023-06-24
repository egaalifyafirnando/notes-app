import React from 'react';
import PropTypes from 'prop-types';
import NoteItemBody from './NoteItemBody';
import NoteItemFooter from './NoteItemFooter';

function NoteItem({ title, body, createdAt, id, onDelete, onArchive }) {
    return (
        <div className="note-items">
            <div className="note-item">
                <NoteItemBody title={title} body={body} createdAt={createdAt} />
                <NoteItemFooter
                    id={id}
                    onDelete={onDelete}
                    onArchive={onArchive}
                />
            </div>
        </div>
    );
}

NoteItem.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
};

export default NoteItem;
