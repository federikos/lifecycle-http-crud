import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';

const Form = ({sendNote}) => {
  const [currentNote, setCurrentNote] = useState('');

  return (
    <form className="form" onSubmit={e => sendNote(e, currentNote)}>
      <h2>New note</h2>
      <div className="form-input-group">
        <textarea value={currentNote} onChange={e => setCurrentNote(e.target.value)} />
        <button className="btn form-btn" type="submit" aria-label="добавить" >
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </form>
  );
};

Form.propTypes = {
  sendNote: PropTypes.func.isRequired,
};

export default Form;