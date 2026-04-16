let movies = [];

async function loadMovies () {
     const response = await fetch('https://raw.githubusercontent.com/vega/vega/main/docs/data/movies.json');
          const data = await response.json();
          //Take a small amout ensuring page isn't crowded
          movies = data.slice(0, 20);
          //Send data to be put on screen
          renderMovies(movies);
}

function renderMovies (movieArray) {
    const grid = document.querySelector('#movie-grid');
    grid.innerHTML = '';

    movieArray.forEach(movie =>{
        //Create card container
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
           <h3>${movie.Title}</h3>
           <p>Rating: ${movie['IMDB Rating']}</p>
           <input type="checkbox" class="check-if-watched">
        `;
        const checkbox = card.querySelector('.check-if-watched');
        const title = card.querySelector('h3');

        checkbox.addEventListener('change', function() {
            if (this.checked) {
                title.style.textDecoration = 'line-through';
            } 
            else {
                title.style.textDecoration = 'none';
            }
        });
        //Put the card into the grid
        grid.appendChild(card);
    });
}    

const searchBar = document.querySelector('#movie-search');

searchBar.addEventListener ('input', function (event) {
    const searchTerm = event.target.value.toLowerCase();

    const filteredMovies = movies.filter(movie => {
        return movie.Title.toLowerCase().includes(searchTerm);
    });
    renderMovies(filteredMovies);
});
        
loadMovies();