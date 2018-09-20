
const s0 = {
    "brightness": 100,
    "contrast":   100,
    "grayscale":  0,
    "hue":        0,
    "blur":       0
};

export const ipReducer = ( state = s0, action ) =>  {
    let newState;
    switch (action.type) {
        case "contrast":
             newState = {...state, contrast: action.payload};
            return newState;
        case "brightness":
             newState = {...state, brightness: action.payload};
            return newState;
        case "grayscale":
            newState = {...state, grayscale: action.payload};
            return newState;
        case "hue":
            newState = {...state, hue: action.payload};
            return newState;
        case "blur":
            newState = {...state, blur: action.payload};
            return newState;
        default:
            return state;
    }
};


