import { Product } from '../product/product.component';
import { ActionTypes } from './actions';

export interface InitialState {
    items: Array<Product>,
    cart: Array<Product>,
}

export const initialState = {
    items: [],
    cart: []
};

export function ShopReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.LOAD_SUCCESS:
            return {
                ...state,
                items: [...action.payload]
            };
        case ActionTypes.ADD:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case ActionTypes.REMOVE:
            return {
                ...state,
                cart: [...state.cart.filter(item => item.name !== action.payload.name)]
            }
        default:
            return state;
    }
}