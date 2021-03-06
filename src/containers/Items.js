import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import callApi  from '../helpers/APIcalls';
import displayItems from '../helpers/displayItems';
import style from '../style/Items.module.css';
import ItemsShow from '../components/ItemsShow';

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      itemsList: this.props.items.itemsList,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  async componentDidMount() {
    const { getAllItems } = this.props;
    const { location } = this.props;
    const { resources } = location.state;
    try {
      await getAllItems(resources, null, null);
    } catch (error) {
      console.log(error)
    }        
  }
  componentDidUpdate(prevProps){
    if(prevProps.items.itemsList !== this.props.items.itemsList){
      this.setState({itemsList: this.props.items.itemsList});
    }
  }

  async handleClick() {
    const next_page = this.props.items.next;
    try {
      await this.props.getAllItems(null, next_page, 'update');
    } catch (error) {
      console.log(error)
    }        
  }

  render() {
    const { items } = this.props;
    const { next, itemsList } = items;
    const display = displayItems(this.props.location.state.resources)
    let more_button;
    if (next !== null) {
      more_button = <div className="btn d-block d-sm-inline-block btn-secondary mb-3" onClick={this.handleClick}> SHOW MORE </div>;
    } else {
      more_button = <span></span>;
    }
    return itemsList.length === 0 ? <div className="d-flex justify-content-center align-items-center pt-5 w-100">Loading...</div> : (
        <main>
          <div className="container pt-5">
            <div className="row">
              <div className="col-lg-10 mx-auto mb-4">
                <div className="text-center">
                    <h2 className={style.title}>{this.props.location.state.resources.toUpperCase()}</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="mb-60">
                  <div className="">
                    <p className={style.show}>Total Items Shown: {itemsList.length}</p>
                    {itemsList.map((item, index) => (
                      <ItemsShow key={index} info={item} display={display} resource={this.props.location.state.resources}/>
                    ))};
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center w-100 mt-3 mb-3">{more_button}</div>
          </div>
        </main>
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