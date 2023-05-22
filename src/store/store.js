import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/posts/postsSlice";
import { searchReducer } from "./slices/searchSlice/searchSlice";
import { usersReducer } from "./slices/users/usersSlice";

const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  search: searchReducer,
});

const store = configureStore({
    reducer:rootReducer
})

// const store = configureStore({
//   reducer: rootReducer,
// });

export default store;
