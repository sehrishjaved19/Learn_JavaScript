var xhr = new XMLHttpRequest();
var url = 'data.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 400) {
        var articles = xhr.response.articles; // get articles array
        var articlesDiv = document.getElementById('articles');

        articles.forEach(function(article) {
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            var title = document.createElement('h2');
            title.textContent = article.title;

            var description = document.createElement('p');
            description.textContent = article.description;

            // Ways to Achieve
            var waysHeader = document.createElement('h3');
            waysHeader.textContent = 'Ways to Achieve:';
            var waysList = document.createElement('ul');
            article.ways_to_achieve.forEach(function(way) {
                var li = document.createElement('li');
                li.textContent = way;
                waysList.appendChild(li);
            });

            // Benefits
            var benefitsHeader = document.createElement('h3');
            benefitsHeader.textContent = 'Benefits:';
            var benefitsList = document.createElement('ul');
            article.benefits.forEach(function(benefit) {
                var li = document.createElement('li');
                li.textContent = benefit;
                benefitsList.appendChild(li);
            });

            // Append everything
            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(waysHeader);
            articleDiv.appendChild(waysList);
            articleDiv.appendChild(benefitsHeader);
            articleDiv.appendChild(benefitsList);

            articlesDiv.appendChild(articleDiv);
        });
    } else {
        console.error('Error fetching JSON');
    }
};

xhr.onerror = function() {
    console.error('Network error');
};

xhr.send();
