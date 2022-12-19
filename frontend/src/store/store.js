import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  allBlogsReducer,
  blogReducer,
  postBlogReducer,
} from "./reducers/blogReducer";
import {
  userInformationReducer,
  userLoginReducer,
} from "./reducers/userReducer";

const reducers = combineReducers({
  userRegister: userLoginReducer,
  userLogin: userLoginReducer,
  postBlog: postBlogReducer,
  allBlogs: allBlogsReducer,
  userInformation: userInformationReducer,
  getBlog: blogReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const store = configureStore({
  initialState,
  reducer: reducers,
});

export default store;
