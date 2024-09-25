import authReducer from "./reducers/authReducer";
import cartReducer from "./reducers/cartReducer";
import homeReducer from "./reducers/homeReducer";
import orderReducer from "./reducers/orderReducer";

const rootReducer = {
  home: homeReducer,
  auth: authReducer,
  cart: cartReducer,
  order: orderReducer,
};

export default rootReducer;
