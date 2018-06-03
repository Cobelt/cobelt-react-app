import { combineReducers } from 'redux';
import ArticlesReducer from './reducer_articles'

const rootReducer = combineReducers({
    articles: ArticlesReducer
});

export default rootReducer;