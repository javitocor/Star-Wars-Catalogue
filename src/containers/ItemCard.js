import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import callApi from '../helpers/APIcalls';
import displayItem from '../helpers/displayItem';
import itemChecker from '../helpers/itemChecker';

class ItemCard extends React.Component {
  componentDidMount() {
    const { getSingleItem } = this.props;
    const { location } = this.props;
    const { link } = location.state;
    getSingleItem(null, link, null);
  }
  

  render() {
    const { items } = this.props;
    const { item } = items;
    const {resource} = this.props.location.state;
    const keys = displayItem(item);
    const filteredItem = itemChecker(item, keys);
    return (      
        <div className="jumbotron bg-success p-4 mt-2">
          {keys.map(key => (
            <p key={key}>{key} : {item[key]}</p>
          ))}
        </div>
    );
  }
}

ItemCard.propTypes = {
  items: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    item: PropTypes.object,
  }).isRequired,
  getSingleItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: {
    error: state.items.error,
    item: state.items.item,
    pending: state.items.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSingleItem: callApi
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);