import { configureStore } from "@reduxjs/toolkit";
import locoReducer from "./locoSlice";

export const store = configureStore({
    reducer: {
        locoScroll: locoReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ["locoScroll/setLoco"], // Ignore these paths in the state
                ignoredPaths: ["locoScroll.locoScroll"],
            },
        }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
