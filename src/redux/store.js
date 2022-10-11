import {createStore,applyMiddleware} from 'redux';
import cartReducer from './cart/cartReducer';
import checkProductQuantity from './middlewares/checkProductQuantity';

const store = createStore(cartReducer,applyMiddleware(checkProductQuantity));

export default store;