import React from 'react';
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

export default NoteItem;
