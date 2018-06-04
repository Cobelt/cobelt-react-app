export function selectArticle(article) {
  return {
    type: 'ARTICLE_SELECTED',
    payload: article,
  };
}

export function changeRoute(route) {
    return {
        type: 'CHANGE_ROUTE',
        payload: route,
    };
}