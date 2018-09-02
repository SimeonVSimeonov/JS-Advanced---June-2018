function getArticleGenerator(articles) {
    let div = $("#content");
    return function () {

        if (articles.length > 0) {
            let article = $("<article>");
            article.append(`${articles.shift()}`);
            div.append(article)
        }
    }
}