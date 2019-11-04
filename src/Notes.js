import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

const Notes = ({notes, deleteNote}) => (
  <div className="notes">
    {
      notes.map(note => {
        return (
          <div key={note.id} className="note">
            {
              note.content
            }
            <button 
            className="btn note-btn" 
            aria-label="удалить" 
            onClick={e => deleteNote(note.id)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        )
      })
    }
  </div>
);

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default Notes;