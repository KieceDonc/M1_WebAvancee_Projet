import { createSlice } from "@reduxjs/toolkit";
import { api } from "../helpers/api.js";

type InitialState = {
    cardata:any;
}

const initialState:InitialState={
    cardata:await api("http://localhost:51001/api/carModel"),
}

const cardata = createSlice({
    name:'cardata',
    initialState,
    reducers:{
        get:(state)=>{
            state.cardata
        },
    }
});

export default cardata.reducer;
export const {get} = cardata.actions