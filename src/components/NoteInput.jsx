import React from 'react';
import PropTypes from 'prop-types';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            limit: 50,
        };

        this.onTitleChangeEventHandler =
            this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler =
            this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value.slice(0, this.state.limit),
            };
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            };
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();

        this.props.addNote(this.state);

        this.setState(() => {
            return {
                title: '',
                body: '',
            };
        });
    }

    render() {
        return (
            <>
                <form
                    className="note-input"
                    onSubmit={this.onSubmitEventHandler}
                >
                    {this.state.limit - this.state.title.length !== 0 ? (
                        <div className="limit">
                            {this.state.limit - this.state.title.length}{' '}
                            character remaining
                        </div>
                    ) : (
                        <div className="limit red">
                            {this.state.limit - this.state.title.length}{' '}
                            character remaining
                        </div>
                    )}

                    <input
                        type="text"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.onTitleChangeEventHandler}
                    />
                    <textarea
                        placeholder="Body"
                        value={this.state.body}
                        onChange={this.onBodyChangeEventHandler}
                        cols="30"
                        rows="10"
                    ></textarea>
                    <button type="submit">Add</button>
                </form>
            </>
        );
    }
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
};

export default NoteInput;
