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

export const setGrayscale = ( value ) => {
    const action = {
        type: "grayscale",
        payload: value
    };
    return action;
};

export const setHue = ( value ) => {
    const action = {
        type: "hue",
        payload: value
    };
    return action;
};

export const setBlur = ( value ) => {
    const action = {
        type: "blur",
        payload: value
    };
    return action;
};