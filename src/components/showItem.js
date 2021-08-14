import React from 'react';
import PropTypes from 'prop-types';
import style from '../style/ItemCard.module.css';

const showItem = props => {
  const { item,value } = props;
  return (
    <div className="list-group-item list-group-item-action flex-column align-items-start bg-light">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1 text-white">{value}</h5>
      </div>
      <p className="mb-1 text-white">{item[value]}</p>     
    </div>
  );
};

showItem.propTypes = {
  item: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
};

export default showItem;