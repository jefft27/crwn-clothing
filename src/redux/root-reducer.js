// represents all the state of our applications
// combines all the states together

import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

export default combineReducers({
    user: userReducer,
});
