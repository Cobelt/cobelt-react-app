// State argument is not app state, only the state
// this reducer is responsible for
export default function(state = 'HOME', action) {
    switch (action.type) {
        case 'CHANGE_ROUTE':
            return action.payload;
    }
    return state;
}