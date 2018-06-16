// State argument is not app state, only the state
// this reducer is responsible for
export default function(state = null, action) {
  switch (action.type) {
    case 'ARTICLE_SELECTED':
      return action.payload;
    default:
      return state;
  }
}
