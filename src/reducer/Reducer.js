import React, {useContext} from "react";

const Reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + action.payload.step
            }

        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - action.payload.step
            }
        default:
            return state
    }

}

export default Reducer;