import { combineReducers } from 'redux';

import RouterReducer from './reducer_router'

import ArticlesReducer from './reducer_articles'
import ActiveArticleReducer from './reducer_active_article'

const rootReducer = combineReducers({
    route: RouterReducer,

    articles: ArticlesReducer,
    activeArticle: ActiveArticleReducer,
});

export default rootReducer;