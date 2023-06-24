import React from 'react';
import dayjs from 'dayjs';
import { getInitialData } from '../utils/index';
import NoteList from './NoteList';
import NoteInput from './NoteInput';
import NoteListArchive from './NoteListArchive';
import Navbar from './Navbar';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            search: '',
        };

        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onSearchHandler(event) {
        this.setState({ search: event.target.value });
    }

    filteredNotes() {
        const { notes, search } = this.state;
        return notes.filter((note) =>
            note.title.toLowerCase().includes(search.toLowerCase())
        );
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
    }

    onArchiveHandler(id) {
        const notes = this.state.notes.map((note) => {
            if (note.id === id) {
                return {
                    ...note,
                    archived: !note.archived,
                };
            }
            return note;
        });

        this.setState({ notes });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: dayjs().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
                    },
                ],
            };
        });
    }

    render() {
        const filteredNotes = this.filteredNotes();

        return (
            <div className="note-app">
                <Navbar />
                <h2>Add New Note</h2>
                <NoteInput addNote={this.onAddNoteHandler} />
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search By Title"
                    value={this.search}
                    onChange={this.onSearchHandler}
                />
                <h2 className="title">Notes List</h2>
                <NoteList
                    notes={filteredNotes}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveHandler}
                />
                <h2 className="title">Archives List</h2>
                <NoteListArchive
                    notes={filteredNotes}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveHandler}
                />
            </div>
        );
    }
}

export default NoteApp;
