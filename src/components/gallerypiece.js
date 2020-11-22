import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const determineAlignment = (justification) => {
  switch (justification) {
    case 'left':
      return 'flex-start';
    case 'center':
      return 'center';
    case 'right':
      return 'flex-end';
    default:
      break;
  }
};

const GalleryPiece = styled.div`
    grid-column: ${(props) => props.columns};
    justify-content: ${(props) => determineAlignment(props.justification)};
`;

function gallerypiece({ photo, justified, columns }) {
  return (
    <GalleryPiece
      justified={justified}
      columns={columns}
    >
      <img alt={photo} src={photo} />
    </GalleryPiece>
  );
}

gallerypiece.propTypes = {
  photo: PropTypes.string.isRequired,
  justified: PropTypes.string.isRequired,
  columns: PropTypes.number.isRequired,
};

export default gallerypiece;
