

const initialState = {
  menu: [],
  loading: true,
  error: false,
  items: [{
    "title": "Cesar salad",
    "price": 12,
    "url": "https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg",
    "category": "salads",
    "id": 1
  },
  {
    "title": "Pizza Margherita",
    "price": 10,
    "url": "http://www.academiabarilla.com/anteprima_pizzamargherita_xhm1p-2_1200.jpg?h=faa3bae42d7180a508c490395249247ded3f362c",
    "category": "pizza",
    "id": 2
  }]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'MENU_REQUESTED':
      return {...state, loading: true, error: false};

    case 'MENU_LOADED':
      return {...state, menu: action.payload, loading: false, error: false};

    case 'MENU_ERROR':
      return {...state, loading: false, error: true};
    
    case 'ITEM_ADD_TO_CART':
      const item = state.menu.find(item => item.id === action.payload);
      return {...state, items:[...state.items, item]};
    
    case 'ITEM_REMOVE_FROM_CART':
      const index = state.items.findIndex(item => item.id === action.payload);
      console.log([...state.items.slice(0, index), ...state.items.slice(index + 1)]);
      return {...state, items:[...state.items.slice(0, index), ...state.items.slice(index + 1)]};
      
    default:
      return state;
  }
}

export default reducer;