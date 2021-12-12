'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    // removing all ads from the page
    const adv = document.querySelectorAll('.promo__adv img');
    const movieList = document.querySelector('.promo__interactive-list');

    const removeAds = (arr) => {
            arr.forEach(item => {
                item.remove();
            });
    }
    
    removeAds(adv);
    
    const makeChanges = () => {
    document.querySelector('.promo__genre').textContent = 'ДРАМА';
    document.querySelector('.promo__bg').style.backgroundImage = "url('img/bg.jpg')";
    };

    makeChanges();

    // rendering Movielist, sorting in alphabetical order and adding numeration
    function loadMovieList(films, parent){
        parent.innerHTML = "";
        films.sort();
                
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                movieDB.movies.splice(i, 1);
                loadMovieList(films, parent);
            });
    })
    };
    
    loadMovieList(movieDB.movies, movieList);
    
    
    // adding new movie from form.input. If name is longer than 21 symb. it will be cut and "..." will be added
    const form = document.querySelector('form.add'),
          addMovie = form.querySelector('.adding__input'),
          checkbox = document.querySelector('[type="checkbox"]');
        
    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        
        let movieName = addMovie.value;

        if (movieName) {
            if (movieName.length > 21) {
                movieName = movieName.substring(0,22) + "...";
            }
            movieDB.movies.push(movieName);
                
            if (checkbox.checked == true) {
                console.log("Добавляем любимый фильм");
            };
        }

        form.reset();
        loadMovieList(movieDB.movies, movieList);
        console.log(movieDB.movies);
        
    });
}
)



