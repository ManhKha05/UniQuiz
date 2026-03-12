import AuthModalReducer from "./authModal";
import authReducer from "./auth"
import { combineReducers } from "redux"

const allReducers = combineReducers({
  AuthModalReducer,
  authReducer
})

export default allReducers;