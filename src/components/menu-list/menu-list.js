import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import { menuRequested, menuLoaded, menuError, addedToCart } from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

import './menu-list.scss';

class MenuList extends Component {
  componentDidMount() {
    this.props.menuRequested();

    const {RestoService} = this.props;
    RestoService.getMenuItems()
      .then(response => this.props.menuLoaded(response))
      .catch(error => this.props.menuError());
  }

  render() {
    const {menuItems, loading, error, addedToCart} = this.props;

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <Error />
    }

    return (
      <ul className="menu__list">
        { 
          menuItems.map((menuItem) => {
            return <MenuListItem 
              key={menuItem.id} 
              menuItem={menuItem}
              onAddToCart={() => addedToCart(menuItem.id)}
              />;
          })
        }
      </ul>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    menuItems: state.menu,
    loading: state.loading,
    error: state.error,
    items: state.items
  }
}

const mapDispatchToProps = { menuRequested, menuLoaded, menuError, addedToCart }

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));