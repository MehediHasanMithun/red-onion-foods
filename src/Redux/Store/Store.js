import { createStore } from "redux";
import cartReducer from "../Reducers/CartReducer";

export const store = createStore(cartReducer);