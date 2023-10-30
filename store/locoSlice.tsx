import { createSlice } from "@reduxjs/toolkit";

// types
import LocomotiveScroll from "locomotive-scroll";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LocoScrollInstance {
    locoScroll: LocomotiveScroll | null;
}

const initialState: LocoScrollInstance = {
    locoScroll: null,
};

export const locoSlice = createSlice({
    name: "locoScroll",
    initialState,
    reducers: {
        setLoco: (state, action: PayloadAction<LocomotiveScroll>) => {
            state.locoScroll = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setLoco } = locoSlice.actions;

export default locoSlice.reducer;
