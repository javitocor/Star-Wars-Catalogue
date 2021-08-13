import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import callApi  from '../helpers/APIcalls';
import displayItems from '../helpers/displayItems';
import { Link } from "react-router-dom";

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type:this.props.match.params.id,
      resources: "",
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const { getAllItems } = this.props;
    const { location } = this.props;
    const { resources } = location.state;
    getAllItems(resources, null);
  }
  handleClick() {
    const next_page = this.props.items.next;
    this.props.getAllItems(null, next_page, 'update');
  }

  render() {
    console.log(this.props);
    const { items } = this.props;
    const { itemsList, next } = items;
    const display = displayItems(this.props.location.state.resources)
    let more_button;
    if (next !== null) {
      more_button = <button onClick={this.handleClick} />;
    } else {
      more_button = <span></span>;
    }
    return itemsList.length === 0 ? <div className="d-flex justify-content-center align-items-center w-100">Loading...</div> : (
        <div>
          <div className="jumbotron bg-success p-4 mt-2">
            {itemsList.map(item => (
              <div>
                <p key={item.url}>{item[display[0]]}: {item[display[1]]}</p>
                <Link
                  key="itemCard"
                  name="itemCard"
                  to={{
                    pathname: `/swinfo/${this.props.location.state.resources}/${item[display[0]]}`,
                    state: {
                      link: item.url,
                      resource: this.props.location.state.resources,
                    },
                  }}
                  className="list-group-item list-group-item-action active list-group-item-success"
                  id="list-home-list"
                  data-toggle="list"
                  role="tab"
                  aria-controls="home"
                  >
                  More
                </Link>
              </div>
            ))};
          </div>
          <div>{more_button}</div>
        </div>
    );
  }
}

Items.propTypes = {
  items: PropTypes.shape({
    error: PropTypes.object,
    pending: PropTypes.bool,
    next: PropTypes.string,
    itemsList: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getAllItems: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: {
    error: state.items.error,
    itemsList: state.items.itemsList,
    pending: state.items.pending,
    next: state.items.next,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllItems: callApi
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Items);