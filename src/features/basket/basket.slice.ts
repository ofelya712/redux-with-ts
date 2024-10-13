import { createSlice } from "@reduxjs/toolkit";
import { IState } from "../bookShop/types";

const initialState:IState={
    book:[]
}

const basketSlice=createSlice({
    name:"basket",
    initialState,
    reducers:{}
})

export const basketReducer=basketSlice.reducer