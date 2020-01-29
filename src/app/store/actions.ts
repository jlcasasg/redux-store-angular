export enum ActionTypes {
    ADD = '[Product] Add to cart',
    REMOVE = '[Product] Remove from cart',
    LOAD_ITEMS = '[Product] Load Items from server',
    LOAD_SUCCESS = '[Product] Load success',
}


export const AddToCart = payload => {
    return {
        type: ActionTypes.ADD,
        payload
    };
};


export const RemoveFromCart = payload => ({
    type: ActionTypes.REMOVE,
    payload
});


export const GetItems = () => ({
    type: ActionTypes.LOAD_ITEMS
});


export const LoadItems = payload => ({
    type: ActionTypes.LOAD_SUCCESS,
    payload
});