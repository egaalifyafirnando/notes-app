import React from 'react';
import dayjs from 'dayjs';

function NoteItemBody({ title, body, createdAt }) {
    const formattedDate = dayjs(createdAt).format('dddd DD MMMM YYYY');
    return (
        <div className="note-item__body">
            <h3 className="note-item__title">{title}</h3>
            <small className="grey">{formattedDate}</small>
            <p className="note-item__body">{body}</p>
        </div>
    );
}

export default NoteItemBody;
