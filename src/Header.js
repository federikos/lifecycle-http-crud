import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

const Header = ({loadNotes}) => {
  return (
    <header>
      <h1>Notes</h1>
      <button 
      className="btn update-btn" 
      onClick={loadNotes} 
      aria-label="обновить">
        <FontAwesomeIcon icon={faSync} />
      </button>
    </header>
  );
};

Header.propTypes = {
  loadNotes: PropTypes.func.isRequired,
};

export default Header;