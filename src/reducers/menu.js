const initialState = {
    isOpen: false
}

export const menu = (state = initialState, action) => {
    switch (action.type) {
        
        case 'TOGGLE_MENU':
            return {
                ...state,
                isOpen: (action.isOpen !== undefined) ? action.isOpen : !state.isOpen
            }
        
        default:
            return state;
    }
}