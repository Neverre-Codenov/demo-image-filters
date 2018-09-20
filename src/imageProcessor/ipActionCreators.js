export const setBrightness = ( value ) => {
    const action = {
        type: "brightness",
        payload: value
    };
    return action;
};

export const setContrast = ( value ) => {
    const action = {
        type: "contrast",
        payload: value
    };
    return action;
};

