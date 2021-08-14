import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from '../style/Items.module.css';

const ItemsShow = props => {
  const { info, display, resource } = props;
  return (
    <div className="d-md-flex align-items-center justify-content-between mb-3 bg-secondary p-3 bg-light">
      <div className="my-4 d-md-flex align-items-center flex-wrap">
        <div className={style.content}>                      
          <div>
            <h5 className="text-center text-md-left text-white">{info[display[0]]} </h5> 
            <p className="text-center text-md-left text-white">{display[1]}: {info[display[1]]}</p>
          </div>                                           
        </div>
      </div>
      <div className="my-4 flex-shrink-0">
        <Link
          key="itemCard"
          name="itemCard"
          to={{
            pathname: `/swinfo/${resource}/${info[display[0]]}`,
            state: {
              link: info.url,
              resource: resource,
            },
          }}
          className="btn d-block w-100 d-sm-inline-block btn-secondary"
          id="list-home-list"
          data-toggle="list"
          role="tab"
          aria-controls="home"
          >
          More
        </Link>
      </div>
    </div>
  );
};

ItemsShow.propTypes = {
  info: PropTypes.object.isRequired,
  display: PropTypes.array.isRequired,
  resource: PropTypes.string.isRequired,
};

export default ItemsShow;