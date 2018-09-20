export const setBrightness = ( value ) => {
    const action = {
        type: "brightness",
        payload: value
    };
    return action;
};

