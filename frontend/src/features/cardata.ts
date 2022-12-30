import { createSlice } from "@reduxjs/toolkit";
import { api } from "../helpers/api";

type InitialState = {
    cardata:any;
    picturesdata:any;
}

const initialState:InitialState={
    cardata: async() => {await api("http://localhost:51001/api/carModel")},
    picturesdata: async() => {await api("http://localhost:51001/api/picturesCar")}
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