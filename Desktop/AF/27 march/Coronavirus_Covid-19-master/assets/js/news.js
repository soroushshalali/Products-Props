fetch('https://newsapi.org/v2/everything?q=covid-19&apiKey=a4ffcc406eac44ee8b834629ad3346b9')
    .then(response => response.json())
    .then(data => {
        console.log(data.articles)
        data.articles.forEach(article => {
            console.log(data)
            let test = "unknown"
            document.getElementById("content").innerHTML += `
    <figure>
    <img src=${article.urlToImage} alt="">
    <figcaption>
        <h2>${article.title} </h2>
        <p>${article.description} </p>
        <div class="info">
            <h4>${article.author == null ? test : article.author} </h4>
            <h4>${article.publishedAt} </h4>
        </div>
        <a href=${article.url} > read more</a>
    </figcaption>
</figure>
    `
        });

    })