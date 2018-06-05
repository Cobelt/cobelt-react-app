export function selectArticle(article) {
  return {
    type: 'ARTICLE_SELECTED',
    payload: article,
  };
}

export function selectQuantityArticles(quantity) {
    return {
        type: 'QUANTITY_SELECTED',
        quantity: quantity,
    };
}

export function changeRoute(route) {
    return {
        type: 'CHANGE_ROUTE',
        route: route,
    };
}