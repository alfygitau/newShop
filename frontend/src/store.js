import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productCreateReducer,
  productDeleteReducer,
  productDetailsReducer,
  productListReducer,
  productUpdateReducer,
} from "./redux/reducers/productReducers";
import { cartReducer } from "./redux/reducers/cartReducers";
import {
  loginReducer,
  registerReducer,
  updateProfileReducer,
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userUpdateReducer,
} from "./redux/reducers/userReducers";
import {
  allOrdersReducer,
  createOrderReducer,
  orderDeliverReducer,
  orderDetailsReducer,
  orderListReducer,
  orderPayReducer,
} from "./redux/reducers/orderReducers";

const middleware = [thunk];

const reducer = combineReducers({
  products: productListReducer,
  productDetails: productDetailsReducer,
  deleteProduct: productDeleteReducer,
  cart: cartReducer,
  login: loginReducer,
  register: registerReducer,
  userList: userListReducer,
  client: userDetailsReducer,
  userUpdate: userUpdateReducer,
  updatedUser: updateProfileReducer,
  userDelete: userDeleteReducer,
  createdOrder: createOrderReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  myOrderList: orderListReducer,
  allOrders: allOrdersReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
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
