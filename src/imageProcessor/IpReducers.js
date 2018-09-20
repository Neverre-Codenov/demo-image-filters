


export const ipReducer = ( state = {  }, action ) =>  {
    switch (action.type) {
        case "brightness":
            const newState = {...state, brightness: action.payload};
            return newState;
        default:
            return state;
    }
};


