export function selectArticle(article) {
  return {
    type: 'ARTICLE_SELECTED',
    payload: article,
  };
}