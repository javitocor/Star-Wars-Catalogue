import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from '../style/ItemCard.module.css';

const ShowItemList = props => {
  const { value, object } = props;
  const data = object[value];
  return (
    <div className="list-group-item list-group-item-action flex-column align-items-start bg-light">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1 text-white">{value.toUpperCase()}</h5>
      </div>
      <ul className="text-decoration-none">
        {data.length === 0 ? <li className="text-white text-decoration-none">No Data</li> : data.map( (item, index) => (
          <li className={style.link}>
            <Link
              name="name"
              key={index+2530}
              to={{
                pathname: item.name ? `/swinfo/${value}/${item.name}`:`/swinfo/${value}/${item.title}`,
                state: {
                  link: item.url,
                  resource: value,
                },
              }}
              className="btn d-block mb-2 d-sm-inline-block btn-secondary text-white"
              id="list-home-list"
              data-toggle="list"
              role="tab"
              aria-controls="name"
              >
              {item.name ? item.name.toUpperCase(): item.title.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>    
    </div>
  );
};

ShowItemList.propTypes = {
  object: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  resource: PropTypes.string.isRequired,
};

export default ShowItemList;