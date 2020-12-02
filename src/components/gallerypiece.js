import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const determineAlignment = (justification) => {
  let justify = '';
  switch (justification) {
    case 'left':
      justify = 'flex-start';
      break;
    case 'center':
      justify = 'center';
      break;
    case 'right':
      justify = 'flex-end';
      break;
    default:
      return 'left';
  }
  return justify;
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
