import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {counterState, decrement, increment} from "../../redux/counterSlice";

const Counter = () => {

    const dispatch = useDispatch()
    const countState = useSelector(counterState);

    const incrementCount = () => {
        dispatch(increment())
    }

    const decrementCount = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <h1 data-testid="counter-element">Il conteggio è: {countState}</h1>
            <button onClick={incrementCount}>Incrementa</button>
            <button onClick={decrementCount}>Decrementa</button>
        </div>
    );
};

export default Counter;
