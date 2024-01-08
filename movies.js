let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];

left_btn.addEventListener('click', ()=> {
    cards.scrollLeft -= 290;
})

right_btn.addEventListener('click', ()=> {
    cards.scrollLeft += 290;
})


const movies = [
    { title: 'The Boys', page: 'theboys.html', imgSrc: 'img/the boys.jpg', rating: 8.7, genre: 'Action, Drama'  },
    { title: 'Money Heist', page: 'mh.html', imgSrc: 'img/money heist.jpg', rating: 8.2, genre: 'Crime, Thriller'  },
    { title: 'Moon Knight', page: 'mk.html', imgSrc: 'img/moon knight.jpg', rating: 7.3, genre: 'Action, Fantasy'  },
    { title: 'Breaking Bad', page: 'bb.html', imgSrc: 'img/BreakingBad-BryanCranston-Heisenberg-TVShowPoster9_2ef2f86e-9ac1-4f34-998f-1b68d17ce018.jpg', rating: 9.5, genre: 'Crime, Drama'  },
    { title: 'Reacher', page: 'reacher.html', imgSrc: 'img/reacher.jpg', rating: 8.1, genre: 'Action, Crime'  },
    { title: 'Invincible', page: 'invincible.html', imgSrc: 'img/invin.jpg', rating: 8.7, genre: 'Action, Animation'  },
    { title: 'The Walking Dead', page: 'twd.html', imgSrc: 'img/twd1.webp', rating: 8.1, genre: 'Drama, Thriller'  },
    { title: 'Stranger Things', page: 'stranger.html', imgSrc: 'img/stranger.webp', rating: 8.7, genre: 'Horror, Fantasy'  },
    { title: 'Peaky Blinders', page: 'peaky.html', imgSrc: 'img/peaky.jpg', rating: 8.8, genre: 'Crime, Drama'  },
    { title: 'The Last of Us', page: 'tlou.html', imgSrc: 'img/tlou2.jpeg', rating: 8.8, genre: 'Action, Adventure'  },


    { title: 'John Wick: Chapter 4', page: 'johnwick.html', imgSrc: 'img/johnwick.jpg', rating: 7.7, genre: 'Action, Thriller'  },
    { title: 'Top Gun: Maverick', page: 'tg.html', imgSrc: 'img/tg', rating: 8.3, genre: 'Action, Drama'  },
    { title: 'Thor: Love and Thunder', page: 'thor.html', imgSrc: 'img/thor love of thunder.jpg', rating: 6.2, genre: 'Action, Adventure'  },
    { title: 'Uncharted', page: 'uncharted.html', imgSrc: 'img/uncharted.webp', rating: 6.3, genre: 'Action, Adventure'  },
    { title: 'Jurassic World: Dominion', page: 'jworld.html', imgSrc: 'img/jurassic world.jpg', rating: 5.6, genre: 'Action, Adventure'  },
    { title: 'Spider-Man: No Way Home', page: 'nwh.html', imgSrc: 'img/spiderman.jpg', rating: 8.2, genre: 'Action, Fantasy'  },
    { title: 'Eternals', page: 'eternals.html', imgSrc: 'img/eternals.jpg', rating: 6.3, genre: 'Action, Fantasy'  },
    { title: 'The Avengers', page: 'avengers.html', imgSrc: 'img/avengers.jpg', rating: 8, genre: 'Action, Sci-Fi'  },
    { title: 'Ant-Man', page: 'antman.html', imgSrc: 'img/ant man.jpg', rating: 8.3, genre: 'Action, Sci-Fi'  },
    { title: 'Interstellar', page: 'interstellar.html', imgSrc: 'img/Interstellar.webp', rating: 8.7, genre: 'Adventure, Sci-Fi'  },

];
    
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    searchInput.addEventListener('input', handleSearch);
    
    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase();
    
        if (searchTerm.trim() === '') {
            clearSearchResults();
        } else {
            const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
            displaySearchResults(filteredMovies);
        }
    }
    
    function displaySearchResults(results) {
        clearSearchResults();
    
        results.forEach(result => {
            const li = document.createElement('li');
    
            const img = document.createElement('img');
            img.src = result.imgSrc;
            img.alt = result.title;
            img.style.width = '50px'; 
            li.appendChild(img);
    
            const detailsDiv = document.createElement('div');
    
            const titleHeading = document.createElement('h4');
            titleHeading.textContent = result.title;
            detailsDiv.appendChild(titleHeading);
    
            const ratingParagraph = document.createElement('p');
            ratingParagraph.textContent = `IMDb: ${result.rating}`;
            detailsDiv.appendChild(ratingParagraph);

            const genreParagraph = document.createElement('p');
            genreParagraph.textContent = `Genre: ${result.genre}`;
            detailsDiv.appendChild(genreParagraph);
    
            li.appendChild(detailsDiv);
    
        li.addEventListener('click', function () {
            window.location.href = result.page; 
        });
    
            searchResults.appendChild(li);
        });
    
        searchResults.style.display = 'block';
    }
    
    function clearSearchResults() {
        searchResults.innerHTML = '';
    
        searchResults.style.display = 'none';
    }

    const play = document.getElementById('play');
const video = document.querySelector('video');

if (play && video) {
    play.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            play.innerHTML = 'Pause <i class="bi bi-pause-fill"></i>';
        } else {
            video.pause();
            play.innerHTML = 'Watch <i class="bi bi-play-fill"></i>';
        }
    });
} else {
    console.error('Play button or video element not found.');
}

    
