const xhr = new XMLHttpRequest();
var url = './health_article.json';
xhr.open('GET', url, true);
// xhr.responseType = 'json';

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
        const responseData = JSON.parse(xhr.response);
        displayArticles(responseData.articles)
        console.log(responseData)
    } else {
        console.log('something web wrong!')
    }
}
xhr.onerror = function () {
    console.error('Network error')
}
xhr.send();

function displayArticles(articles){
    const refArticle = document.getElementById('articles')
    const articleTag = document.createElement('article');
    articleTag.innerHTML = articles.map((singleArticle, index) => {
        return (
            `--------------------------------------------------------------------------------
            <h2>${singleArticle.title}</h2>
            <p>${singleArticle.description}</p>
            <h3>Ways to achive</h3>
            <ul>${singleArticle.ways_to_achieve.map(item => `<li>${item}</li>`).join('')}</ul>
            <h3>Benefits</h3>
            <ul>${singleArticle.benefits.map(item => `<li>${item}</li>`).join('')}</ul>
            `
        )
    }).join('');
    refArticle.append(articleTag)
}