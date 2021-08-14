import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from '../style/ItemCard.module.css';

const showItemList = props => {
  const { value, object, resource } = props;
  const data = object[value];
  return (
    <div className="list-group-item list-group-item-action flex-column align-items-start bg-light">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1 text-white">{value}</h5>
      </div>
      <ul>
        {data.map( ( {name, url} ) => {
          <li>
            <Link
              name="name"
              to={{
                pathname: `/swinfo/${resource}/${name}`,
                state: {
                  link: url,
                  resource: resource,
                },
              }}
              className="btn d-block w-100 d-sm-inline-block btn-secondary"
              id="list-home-list"
              data-toggle="list"
              role="tab"
              aria-controls="name"
              >
              {name.toUpperCase()}
            </Link>
          </li>
        })}
      </ul>    
    </div>
  );
};

showItemList.propTypes = {
  object: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  resource: PropTypes.string.isRequired,
};

export default showItemList;