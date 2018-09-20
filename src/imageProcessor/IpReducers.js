


export const ipReducer = ( state = {  }, action ) =>  {
    let newState;
    switch (action.type) {
        case "contrast":
             newState = {...state, contrast: action.payload};
            return newState;
        case "brightness":
             newState = {...state, brightness: action.payload};
            return newState;
        default:
            return state;
    }
};


