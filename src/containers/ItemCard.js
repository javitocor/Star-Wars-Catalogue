import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import callApi from '../helpers/APIcalls';
import displayItem from '../helpers/displayItem';
import itemChecker from '../helpers/itemChecker';
import checkKey from '../helpers/checkKey';
import ShowItemList from '../components/ShowItemList';
import ShowItem from '../components/ShowItem';
import card from '../style/ItemCard.module.css'

class ItemCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      keys: [],
      filteredItem: null,
    };
  }
  async componentDidMount() {
    const { getSingleItem } = this.props;
    const { location } = this.props;
    const { link } = location.state;
    try{
      const data = await getSingleItem(null, link, null);        
      const keys = displayItem(data);
      const filteredItem = await itemChecker(data, keys);
      console.log(filteredItem[0])
      this.setState({ keys: keys, filteredItem: filteredItem });
    } catch (error) {
      console.log(error)
    }    
  }
  

  render() {
    const { items } = this.props;
    const { item } = items;
    const {resource} = this.props.location.state;
    console.log(this.state.filteredItem);
    return Object.keys(item).length === 0 ? <div className="d-flex justify-content-center align-items-center pt-5 w-100">Loading...</div> : (      
      <main>
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-10 mx-auto mb-4">
              <div className="text-center">
                  <h2 className={card.title}>{resource === 'films' ? item.title : item.name}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto mb-4">
              <div className="mb-60">
                <div className="">
                  <p className={card.show}>Total Attributes Shown: {this.state.keys.length}</p>
                  <div className="list-group">
                  {this.state.keys.map(value => (
                    <div>
                    {checkKey(value, this.state.filteredItem[1]) 
                      ? <ShowItemList key={Date.now()} value={value} object={this.state.filteredItem[0]}/> 
                      : <ShowItem key={value} item={item} value={value}/>
                    } 
                    </div>                   
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
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

