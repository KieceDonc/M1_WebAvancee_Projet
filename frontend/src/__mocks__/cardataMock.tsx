import { createSlice } from "@reduxjs/toolkit";
import { api } from "../helpers/api";
import { mockCarPic, mockCarData } from "./objectsMock";

type InitialState = {
    cardata: any;
    picturesdata: any;
}

const initialState: InitialState = {
    cardata: mockCarData,
    picturesdata: mockCarPic
}


const mockCardata = createSlice({
    name: 'cardata',
    initialState,
    reducers: {
        get: (state) => {
            state.cardata
        },
    }
});

export default mockCardata.reducer;
export const { get } = mockCardata.actions