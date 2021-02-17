import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { MobileBreakpoint } from '../global/styles/layout.styles';

const calculateColumnSpan = (columns, justified) => {
  let start;
  switch (justified) {
    case 'left':
      return `1/${columns + 1}`;
    case 'centered':
      start = Math.round((14 - columns) / 2);
      return `${start}/${start + columns}`;
    case 'right':
      start = 13 - columns;
      return `${start}/15`;
    default:
      break;
  }
};

const GalleryPieceWrapper = styled.div`
  grid-column: ${(props) => calculateColumnSpan(props.columns, props.justified)};
  grid-row: ${(props) => props.row};
  img {
    width: 100%;
    margin-bottom: 4rem;
  }

  @media (max-width: ${MobileBreakpoint}){
    grid-column: 1/15
  }
`;

function GalleryPiece({
  row, photo, justified, columns,
}) {
  return (
    <GalleryPieceWrapper
      speed="-5"
      row={row}
      justified={justified}
      columns={columns}
    >
      <img alt={photo} src={photo} />
    </GalleryPieceWrapper>
  );
}

GalleryPiece.propTypes = {
  photo: PropTypes.string.isRequired,
  justified: PropTypes.string.isRequired,
  columns: PropTypes.number.isRequired,
};

export default GalleryPiece;
