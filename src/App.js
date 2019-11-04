import React, {Component} from 'react';
import shortid from 'shortid';
import './App.css';
import Header from './Header';
import Notes from './Notes';
import Form from './Form';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    }
  }

  loadNotes = () => {
    fetch(`${process.env.REACT_APP_NOTES_URL}/notes`)
      .then(res => res.json())
      .then(notes => {
        this.setState({
          notes: notes
        })
      })
  }

  sendNote = (e, currentNote) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_NOTES_URL}/notes`, {
      method: 'POST',
      body: JSON.stringify({
        content: currentNote,
        id: shortid.generate(),
      }),
    })
      .then(res => this.loadNotes())
  }

  deleteNote = id => {
    fetch(`${process.env.REACT_APP_NOTES_URL}/notes/${id}`, {
      method: 'DELETE',
    })
      .then(res => this.loadNotes())
  }

  componentDidMount() {
    this.loadNotes();
  }

  render () {
    return (
      <div className="App">
        <Header loadNotes={this.loadNotes} />
        <Notes notes={this.state.notes} deleteNote={this.deleteNote} />
        <Form sendNote={this.sendNote} />
      </div>
    );
  };
}

export default App;
