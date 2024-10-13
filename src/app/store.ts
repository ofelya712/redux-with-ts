import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineReducers, combineSlices, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { reducer } from "../features/bookShop/book.slice"
import { basketReducer } from "../features/basket/basket.slice"
import { IState } from "../features/bookShop/types"

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.

// Infer the `RootState` type from the root reducer
export type RootState = IState

// The store setup is wrapped in `makeStore` to allow reuse
// when setting up tests that need the same store config


export const store = configureStore({
  reducer:reducer
})

// Infer the type of `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
