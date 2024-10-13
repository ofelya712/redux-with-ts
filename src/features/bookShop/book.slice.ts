import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "./types";
import axios from "axios";

const initialState:IState={
    book:[],
    search:""
}
export const getAllBook=createAsyncThunk("get/book",async ()=>{
    const response=await axios.get("http://localhost:3004/books")
    return response.data
})

const BookSlice=createSlice({
    name:"books",
    initialState,
    reducers:{
        searchByName:(state,action:PayloadAction<string>)=>{
            state.search=action.payload
        }
    },
    extraReducers:builder=>{
        builder.addCase(getAllBook.fulfilled,(state,action)=>{
            state.book=action.payload
        })
    }
})

export const reducer=BookSlice.reducer
export const {searchByName}=BookSlice.actions