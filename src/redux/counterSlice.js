import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.count += 1
        },
        decrement: state => {
            state.count = state.count === 0
                ? 0
                : state.count -= 1
        }
    }
})

export const counterState = state => state.counter.count
export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
