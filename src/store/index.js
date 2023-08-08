import { reducer } from './reducers';

 const initialState = {
    cart: [{}],
    number: 0,
    products: [{}, {}],
    user: null,
    // foco E VAI TOMA NO...
};

export {
    reducer,
    initialState
};