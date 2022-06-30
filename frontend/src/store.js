import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailsReducer,
  productListReducer,
} from "./redux/reducers/productReducers";
import { cartReducer } from "./redux/reducers/cartReducers";
import {
  loginReducer,
  registerReducer,
  updateProfileReducer,
  userDetailsReducer,
  userListReducer,
} from "./redux/reducers/userReducers";
import {
  createOrderReducer,
  orderDetailsReducer,
  orderListReducer,
  orderPayReducer,
} from "./redux/reducers/orderReducers";

const middleware = [thunk];

const reducer = combineReducers({
  products: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  login: loginReducer,
  register: registerReducer,
  userList: userListReducer,
  client: userDetailsReducer,
  updatedUser: updateProfileReducer,
  createdOrder: createOrderReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  myOrderList: orderListReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  login: {
    userInfo: userInfoFromStorage,
  },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
