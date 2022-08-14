const menuRequested = () => {
  return {type: 'MENU_REQUESTED'};
};

const menuLoaded = (newMenu) => {
  return {type: 'MENU_LOADED', payload: newMenu};
};

const menuError = () => {
  return {type: 'MENU_ERROR'};
};

const addedToCart = (id) => {
  return {type: 'ITEM_ADD_TO_CART', payload: id};
};

const deleteFromCart = (id) => {
  return {type: 'ITEM_REMOVE_FROM_CART', payload: id};
};

export {
  menuRequested,
  menuLoaded,
  menuError,
  addedToCart,
  deleteFromCart
}