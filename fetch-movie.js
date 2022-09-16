function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('movie');

// ----!>const url = 'http://localhost:63342/api/movies'; <!----

//const url = 'data/data.json';
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            console.log(data.movie);
            console.log("Visa första i json-objektet: " + data.movie[?].movieName);
            let movie = data.movie;
            return movie.map(function(movie)
            {
                let li = createNode('li');
                li.innerHTML = movie.movieName + " " + movie.movieCategory;
                append(ul, li);
            })
        })
        .catch(function(error) {
            console.log(error);
        });