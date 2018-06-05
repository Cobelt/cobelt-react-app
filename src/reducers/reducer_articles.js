import {articleList} from "../assets/fake_DB/articles";

export default function(state = null, action) {
    switch (action.type) {
        case 'QUANTITY_SELECTED':
            let list = articleList.slice(0, action.quantity);
            let moduloTwoResult = 0;
            list.forEach(article => {
                if (article.isImportant && list.length % 2 === moduloTwoResult) {
                    moduloTwoResult = moduloTwoResult+1 %2;
                    list.pop();
                }
            });
            return list
    }
    return articleList.slice(0, 6);
}