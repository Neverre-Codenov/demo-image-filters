const s0 = {
    selectedImageUrl: "./images/space-day.jpg"
};

export const GalleryReducer = ( state = s0, action ) => {
    let newState;
    switch (action.type) {
        case "set selected image":
            newState = {...state, selectedImageUrl: action.payload};
            return newState;
        default:
            return state;
    }
};
