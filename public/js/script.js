// Sample data structure (In Laravel, this would come from your database)
const folder = "/img/"; // Replace with your actual folder path
const movies = [
    {
        id: 1,
        title: "Deadpool",
        genre: "action"+"adventure"+"comedy",
        casts: "T.J. Miller, Ed Skrein, Jed Rees, Taylor Hickson, Isaac C. Singleton Jr.",
        rating: 9.9,
        year: 2016,
        poster: folder+"deadpool_movie_1.jpg",
        country: "United States of America",
        duration: "108 min",
        production: "Marvel Entertainment, TSG Entertainment, 20th Century Fox, Genre Films, The Donners' Company.",
        description: "Deadpool tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
    },
    {
        id: 2,
        title: "Deadpool 2",
        genre: "action"+"adventure"+"comedy",
        casts: "Karan Soni, Zazie Beetz, Islie Hirvonen, Paul Wu, Alan Tudyk.",
        rating: 9.8,
        year: 2018,
        poster: folder+"deadpool_2_movie_2.jpg",
        country: "United States of America",
        duration: "121 min",
        production: "Marvel Entertainment, 20th Century Fox.",
        description: "Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.",
    },
    {
        id: 3,
        title: "Deadpool & Wolverire",
        genre: "sci-fi"+"action"+"comedy" ,
        casts: "Matthew Macfadyen, Ray Park, Dania Ramirez, Chris Hemsworth, Brianna Hildebrand",
        rating: 9.5,
        year: 2024,
        poster: folder+"deadpool_&_wolverire_movie_3.jpg",
        country: "United States of America",
        duration: "127 min",
        production: "Marvel Studios, Kevin Feige Productions, Maximum Effort, 21 Laps Entertainment, Genre Films.",
        description: "Deadpool tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
    },
    {
        id: 4,
        title: "Dune",
        genre: "sci-fi"+"adventure"+"drama"+"action",
        casts: "Timothée Chalamet, Rebecca Ferguson, Dave Bautista, Stellan Skarsgård, Charlotte Rampling.",
        poster: folder +"dune_movie_4.jpg",
        country: "Canada, Hungary, United Kingdom, United States of America, Jordan, Norway, United Arab Emirates.",
        rating: 4.2,
        year: 2021,
        duration: "155 min",
        production: "Legendary Entertainment, Framestore, Double Negative (DNEG), Warner Bros. Pictures, Villeneuve Films.",
        description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence—a commodity capable of unlocking humanity's greatest potential—only those who can conquer their fear will survive.",
    },
    {
        id: 5,
        title: "Dune: Part Two",
        genre: "sci-fi"+"adventure",
        casts: "Josh Brolin, Dave Bautista, Tony Cook, Italo Amerighi, Stellan Skarsgård.",
        poster: folder +"dune_part_two_movie_5.jpg",
        country: "United States of America",
        rating: 4.2,
        year: 2024,
        duration: "167m",
        production: "Legendary Pictures, Legendary Entertainment.",
        description: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
    },
    {
        id: 6,
        title: "The Fast and the Furious",
        genre: "crime"+"thriller"+"action",
        casts: "Paul Walker, Ted Levine, Chad Lindberg, Reggie Lee, RJ de Vera.",
        poster: folder +"thefastandthefurious_movie_6.jpg",
        country: "United States of America, Germany",
        rating: 10,
        year: 2001,
        duration: "106m",
        production: "Universal Pictures, Ardustry Entertainment, Mediastream Film GmbH & Co. Productions KG, Original Film",
        description: "Domenic Toretto is a Los Angeles street racer suspected of masterminding a series of big-rig hijackings. When undercover cop Brian O'Conner infiltrates Toretto's iconoclastic crew, he falls for Toretto's sister and must choose a side: the gang or the LAPD.",
    },
    {
        id: 7,
        title: "2 Fast 2 Furious",
        genre: "thriller"+"action"+"crime",
        casts: "Edward Finlay, Cole Hauser, Paul Walker, Troy Brown, Marc Macaulay", 
        poster: folder +"2fast2furious_movie_7.jpg",
        country: "United States of America",
        rating: 9.8,
        year: 2003,
        duration: "1h 47m",
        production:"Original Film, Universal Pictures, Mikona Productions GmbH & Co. KG, Ardustry Entertainment.",
        description: "It's a major double-cross when former police officer Brian O'Conner teams up with his ex-con buddy Roman Pearce to transport a shipment of dirty money for shady Miami-based import-export dealer Carter Verone. But the guys are actually working with undercover agent Monica Fuentes to bring Verone down.",
    },
    {
        id: 8,
        title: "The Fast and the Furious: Tokio Drift",
        genre: "crime"+"thriller"+"action",
        casts: "Lucas Black, Nathalie Kelley, Sung Kang, Shad Moss, Brian Tee",
        poster: folder +"thefastandthefurious_tokiodrift_movie_8.jpg",
        country: "Japan, United States of America",
        rating: 9.7,
        year: 2006,
        duration: "104m",
        production: "MP Munich Pape Filmproductions, Original Film, Relativity Media, Universal Pictures.",
        description: "In order to avoid a jail sentence, Sean Boswell heads to Tokyo to live with his military father. In a low-rent section of the city, Shaun gets caught up in the underground world of drift racing",
    },
    {
        id: 9,
        title: "Fast & Furious",
        genre: "thriller"+"action"+"drama"+"crime",
        casts: "Roger Fan, Laz Alonso, Loren Lazerine, Assaf Cohen, Julian Starks",
        poster: folder +"fast&furious_movie_9.jpg",
        country: "United States of America",
        rating: 9.9,
        year: 2009,
        duration: "107m",
        production: "One Race, Dentsu, Universal Pictures, Original Film, Relativity Media",
        description: "When a crime brings them back to L.A., fugitive ex-con Dom Toretto reignites his feud with agent Brian O'Conner. But as they are forced to confront a shared enemy, Dom and Brian must give in to an uncertain new trust if they hope to outmaneuver him. And the two men will find the best way to get revenge: push the limits of what's possible behind the wheel.",
    },
    {
        id: 10,
        title: "Fast Five",
        genre: "crime"+"action"+"thriller",
        casts: "Luis Da Silva Jr., Michelle Rodriguez, Pedro García, Michael Irby, Fernando Chien.",
        poster: folder +"fastfive_movie_10.jpg",
        country: "United States of America, Germany",
        rating: 10,
        year: 2011,
        duration: "130m",
        production: "Original Film, One Race, Universal Pictures.",
        description: "Former cop Brian O'Conner partners with ex-con Dom Toretto on the opposite side of the law. Since Brian and Mia Toretto broke Dom out of custody, they've blown across many borders to elude authorities. Now backed into a corner in Rio de Janeiro, they must pull one last job in order to gain their freedom.",
    },
    {
        id: 11,
        title: "Fast & Furious 6",
        genre: "crime"+"thriller"+"action",
        casts: "Andrew Koji, Andrei Zayats, Jason Statham, Clara Paget, Rita Ora",
        poster: folder +"Fast&Furious6_movie_11.jpg",
        country: "United States of America",
        rating: 10,
        year: 2013,
        duration: "131m",
        production: "Dentsu, Original Film, One Race, Relativity Media, Universal Pictures, Fuji Television Network, F & F VI Productions A.I.E.",
        description: "Hobbs has Dominic and Brian reassemble their crew to take down a team of mercenaries: Dominic unexpectedly gets convoluted also facing his presumed deceased girlfriend, Letty.",
    },
    {
        id: 12,
        title: "Furious 7",
        genre: "crime"+"thriller"+"action",
        casts: "Ludacris, Elsa Pataky, Paul Walker, Levy Tran, Tyrese Gibson.",
        poster: folder +"furious7_movie_12.jpg",
        country: "United States of America",
        rating: 7.1,
        year: 2015,
        duration: "137m",
        production: "Original Film, Universal Pictures, Dentsu, China Film Co., Abu Dhabi Film Commission, Media Rights Capital, One Race, Fuji Television Network, Colorado Office of Film, Television & Media, Québec Production Services Tax Credit.",
        description: "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
    },
    {
        id: 13,
        title: "The Fate of the Furious",
        genre: "crime"+"thriller"+"action"+"adventure"+"mystery",
        casts: "Don Omar, Elsa Pataky, Eden Estrella, Scott Eastwood, Yassie Hawkes.",
        poster: folder +"thefateofthefurious8_movie_13.jpg",
        country: "United States of America, Germany",
        rating: 6.6,
        year: 2017,
        duration: "136m",
        production: "Universal Pictures, Original Film, Fuji Eight Company Ltd., China Film Co., Dentsu, One Race.",
        description: "When a mysterious woman seduces Dom into the world of crime and a betrayal of those closest to him, the crew face trials that will test them as never before.",
    },
    {
        id: 14,
        title: "Fast & Furious Presents: Hobbs & Shaw",
        genre: "crime"+"drama"+"action",
        casts: "Dwayne Johnson, Jason Statham, Idris Elba, Vanessa Kirby, Eiza González",
        poster: folder +"fast&furiouspresents_hobbs&shaw_movie_14.jpg",
        country: "United States of America",
        rating: 6.5,
        year: 2019,
        duration: "136m",
        production: "Universal Pictures.",
        description: "A spinoff of The Fate of the Furious, focusing on Johnson's US Diplomatic Security Agent Luke Hobbs forming an unlikely alliance with Statham's Deckard Shaw.",
    },
    {
        id: 15,
        title: "F9 (Fast & Furious 9)",
        genre: "crime"+"thriller"+"action",
        casts: "Vin Diesel, Tyrese Gibson, Cody Rain Murray, Krzysztof Mardula, John Cena.",
        poster: folder +"fast&furious9_movie_15.jpg",
        country: "United States of America, Germany",
        rating: 5.2,
        year: 2021,
        duration: "145m",
        production: "Universal Pictures, Original Film, One Race, Perfect Storm Entertainment, RK films, ZXY MOVIES.",
        description: "The next installment in the franchise.",
    },
    {
        id: 16,
        title: "Fast X",
        genre: "crime"+"thriller"+"action",
        casts: "Vin Diesel, Tyrese Gibson, Cody Rain Murray, Krzysztof Mardula, John Cena.",
        poster: folder +"fast&furious10_movie_16.jpg",
        country: "United States of America",
        rating: 6.3,
        year: 2023,
        duration: "142m",
        production: "Universal Pictures, Original Film, One Race, Perfect Storm Entertainment, Dentsu, RK films.",
        description: "Tenth and final installment of the Fast and Furious franchise.",
    },
    {
        id: 17,
        title: "SPY x FAMILY CODE: White",
        genre: "comedy"+"adventure"+"action"+"animation",
        casts: ["Banjou Ginga", "Kenichirou Matsuda", "Tomoya Nakamura", "Shunsuke Takeuchi", "Saori Hayami"],
        poster: folder +"spyxfamilycode_white_movie_17.jpg",
        country: "Japan",
        rating: 7.3,
        year: 2023,
        duration: "110m",
        production: ["Wit Studio", "CloverWorks", "TOHO", "Shueisha", "TV Tokyo", "Shogakukan-Shueisha Productions", "Toho Company", "Ltd"],
        description: "While under the guise of taking his family on a weekend winter getaway, Loid's attempt to make progress on his current mission Operation Strix proves difficult when Anya mistakenly gets involved and triggers events that threaten world peace.",
    },
    {
        id: 18,
        title: "My Spy",
        genre: "comedy"+"action",
        casts: ["Paul du Toit", "Dylan Viljoen", "Adam Neill", "Duane Behrens", "Peter Butler"],
        poster: folder +"myspy_movie_18.jpg",
        country: "United States of America",
        rating: 6.3,
        year: 2019,
        duration: "111m",
        production: ["STX Entertainment"],
        description: "A hardened CIA operative finds himself at the mercy of a precocious 9-year-old girl, having been sent undercover to surveil her family.",
    },
    {
        id: 19,
        title: "My Spy: The Eternal City",
        genre: "comedy"+"action",
        casts: ["Paul du Toit", "Dylan Viljoen", "Adam Neill", "Duane Behrens", "Peter Butler"],
        poster: folder +"myspytheeternalcity_movie_19.jpg",
        country: "United States of America",
        rating: 5.6,
        year: 2024,
        duration: "111m",
        production: ["STXfilms", "MWM Studios", "Good Fear", "Dogbone Entertainment", "Amazon MGM Studios", "STX Entertainment"],
        description: "Veteran CIA operative JJ and his 14-year-old stepdaughter and protégé Sophie reunite to save the world when a high school choir tour of Italy is interrupted by a nefarious nuclear plot targeting the Vatican.",
    },
    {
        id: 19,
        title: "The Matrix Resurrections",
        genre: "action",
        poster: folder +"the_matrix_resurrections_movie_5.jpg",
        rating: 5.6,
        year: 2021,
        duration: "2h 28m",
        description: "Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, Mr. Anderson will have to choose to follow the white rabbit once more.",
    },
    {
        id: 20,
        title: "The Dark Knight",
        genre: "",
        casts: "Christian Bale, Heath Ledger, Aaron Eckhart",
        year: 2008,
        rating: 4.9,
        poster: folder+"the_dark_knight_movie_2.jpg",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        director: "Christopher Nolan",
        
    },
    {
        id: 21,
        title: "Interstellar",
        genre: "action",
        rating: 4.7,
        year: 2014,
        poster: folder+"interstellar_movie_6.jpg",
        duration: "2h 28m",
        description: "Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, Mr. Anderson will have to choose to follow the white rabbit once more.",

    },
    {
        id: 22,
        title: "Inception",
        year: "2010",
        rating: 4.8,
        poster: folder+"inception_movie_7.jpg",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        director: "Christopher Nolan",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
    },
    // Add more movies...
];

const series = [
    {
        id: 1,
        title: "Stranger Things",
        genre: "fantasy",
        poster: folder +"stranger_things_season_1.jpg",
        rating: 4.8,
        year: "2016-Present",
        seasons: 1,
        description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
        episodes: {
            1: [
                { title: "Chapter One: The Vanishing of Will Byers", duration: "49m" },
                { title: "Chapter Two: The Weirdo on Maple Street", duration: "56m" },
                // More episodes...
            ]
        }
    },
    {
        id: 2,
        title: "Breaking Bad",
        genre: "crime",
        poster: folder +"breaking_bad_season_1.jpg",
        rating: 4.9,
        year: "2008-2013",
        seasons: 5,
        description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
        episodes: {
            1: [
                { title: "Pilot", duration: "58m" },
                { title: "Cat's in the Bag...", duration: "48m" },
                // More episodes...
            ]
        }
    },
];

const trendingMovies = [
    {
        id: 1,
        title: "Deadpool",
        genre: "action, adventure, comedy",
        casts: "T.J. Miller, Ed Skrein, Jed Rees, Taylor Hickson, Isaac C. Singleton Jr.",
        rating: 9.9,
        year: 2016,
        poster: folder+"deadpool_movie_1.jpg",
        country: "United States of America",
        duration: "108 min",
        Production: "Marvel Entertainment, TSG Entertainment, 20th Century Fox, Genre Films, The Donners' Company",
        description: "Deadpool tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
    },
    {
        id: 2,
        title: "The Dark Knight",
        year: "2008",
        rating: 4.9,
        poster: folder+"the_dark_knight_movie_2.jpg"
    },
    {
        id: 6,
        title: "Interstellar",
        year: "2014",
        rating: 4.7,
        poster: folder+"interstellar_movie_6.jpg"
    }
];

const popularSeries = [
    {
        id: 1,
        title: "Breaking Bad",
        year: "2008-2013",
        rating: 4.9,
        poster: folder+"breaking_bad_season_1.jpg"
    },
    {
        id: 2,
        title: "Game of Thrones",
        year: "2011-2019",
        rating: 4.8,
        poster: folder+"game_of_thrones_season_1.jpg"
    },
    {
        id: 3,
        title: "Stranger Things",
        year: "2016-Present",
        rating: 4.7,
        poster: folder+"stranger_things_season_1.jpg"
    }
];

// Function to create movie cards
function createMovieCard(movie) {
    return `
        <div class="col-6 col-md-4 col-lg-3" data-genre="${movie.genre}">
            <div class="movies-card" data-movie-id="${movie.id}">
                <img src="${movie.poster}" alt="${movie.title} movie poster" class="img-fluid">
                <div class="movies-info">
                    <h3 class="h5">${movie.title}</h3>
                    <p class="mb-0">${movie.year} • ⭐ ${movie.rating}</p>
                </div>
            </div>
        </div>
    `;
}

function showMovieDetails(movie) {
    const modal = $('#moviesModal');
    modal.find('.modal-title').text(movie.title);
    modal.find('.modal-body').html(`

        <div class="row">

            <div class="col-md-4">
                <img src="${movie.poster}" alt="${movie.title} poster" class="img-fluid rounded">
            </div>

            <div class="col-md-8">

                <p class="lead">${movie.description}</p>

                <div class="movies-details">
                    <p><strong>Genre:</strong> ${movie.genre}</p>
                    <p><strong>Rating:</strong> ⭐ ${movie.rating}</p>
                    <p><strong>Year:</strong> ${movie.year}</p>
                    <p><strong>Duration:</strong> ${movie.duration}</p>
                    <p><strong>Director:</strong> ${movie.director}</p>
                    <p><strong>Cast:</strong> ${movie.cast.join(", ")}</p>
                </div>

            </div>

        </div>

    `);
    modal.modal('show');
}

$(document).ready(function() {
    // Populate movie grid
    const movieGrid = $('#movies-grid');
    movies.forEach(movie => {
        movieGrid.append(createMovieCard(movie));
    });

    // Genre filter functionality
    $('.genre-filter').click(function() {
        $('.genre-filter').removeClass('active');
        $(this).addClass('active');
        
        const selectedGenre = $(this).data('genre');
        if (selectedGenre === 'all') {
            $('.col-6').show();
        } else {
            $('.col-6').hide();
            $(`.col-6[data-genre="${selectedGenre}"]`).show();
        }
    });

    // Search functionality
    $('input[type="search"]').on('input', function() {
        const searchTerm = $(this).val().toLowerCase();
        $('.movie-card').each(function() {
            const title = $(this).find('h3').text().toLowerCase();
            $(this).closest('.col-6').toggle(title.includes(searchTerm));
        });
    });

    // Movie card click handler
    $(document).on('click', '.movies-card', function() {
        const movieId = $(this).data('movie-id');
        const movie = movies.find(m => m.id === movieId);
        if (movie) {
            showMovieDetails(movie);
        }
    });
});

function createSeriesCard(series) {
    return `
        <div class="col-6 col-md-4 col-lg-3" data-genre="${series.genre}">

            <div class="series-card" data-series-id="${series.id}">

                <img src="${series.poster}" alt="${series.title} series poster" class="img-fluid">
                
                <div class="series-info">
                    <h3 class="h5">${series.title}</h3>
                    <p class="mb-0">${series.year} • ⭐ ${series.rating}</p>
                </div>

            </div>

        </div>

    `;
}

function showSeriesDetails(series) {
    const modal = $('#seriesModal');
    modal.find('.modal-title').text(series.title);
    modal.find('.modal-body').html(`

        <div class="row">

            <div class="col-md-4">
                <img src="${series.poster}" alt="${series.title} poster" class="img-fluid rounded">
            </div>

            <div class="col-md-8">

                <p class="lead">${series.description}</p>
                <p><strong>Genre:</strong> ${series.genre}</p>
                <p><strong>Rating:</strong> ⭐ ${series.rating}</p>
                <p><strong>Year:</strong> ${series.year}</p>
                <p><strong>Seasons:</strong> ${series.seasons}</p>
                
                <div class="mt-4">

                    <select class="form-select season-selector mb-3">
                        ${Array.from({length: series.seasons}, (_, i) => i + 1).map(season => 
                            `<option value="${season}">Season ${season}</option>`
                        ).join('')}
                    </select>
                    
                    <div class="episode-list">

                        ${series.episodes[1].map(episode => `

                            <div class="episode-item">

                                <div class="d-flex justify-content-between align-items-center">
                                    <span>${episode.title}</span>
                                    <span class="text-muted">${episode.duration}</span>
                                </div>

                            </div>

                        `).join('')}

                    </div>

                </div>

            </div>

        </div>

    `);

    modal.modal('show');
}

$(document).ready(function() {
    // Populate series grid
    const seriesGrid = $('#series-grid');
    series.forEach(show => {
        seriesGrid.append(createSeriesCard(show));
    });

    // Genre filter functionality
    $('.genre-filter').click(function() {
        $('.genre-filter').removeClass('active');
        $(this).addClass('active');
        
        const selectedGenre = $(this).data('genre');
        if (selectedGenre === 'all') {
            $('.col-6').show();
        } else {
            $('.col-6').hide();
            $(`.col-6[data-genre="${selectedGenre}"]`).show();
        }
    });

    // Search functionality
    $('input[type="search"]').on('input', function() {
        const searchTerm = $(this).val().toLowerCase();
        $('.series-card').each(function() {
            const title = $(this).find('h3').text().toLowerCase();
            $(this).closest('.col-6').toggle(title.includes(searchTerm));
        });
    });

    // Series card click handler
    $(document).on('click', '.series-card', function() {
        const seriesId = $(this).data('series-id');
        const show = series.find(s => s.id === seriesId);
        if (show) {
            showSeriesDetails(show);
        }
    });

    // Season selector change handler
    $(document).on('change', '.season-selector', function() {
        const seasonNumber = $(this).val();
        // Here you would typically fetch episodes for the selected season
        // For now, we'll just show a message
        const episodeList = $(this).siblings('.episode-list');
        episodeList.html('<div class="episode-item">Loading episodes for season ' + seasonNumber + '...</div>');
    });
});

function createContentCard(content) {
    return `
        <div class="col-12 col-md-6 col-lg-4">

            <div class="content-card">
            
                <img src="${content.poster}" alt="${content.title} poster" class="img-fluid">
                
                <div class="content-info">
                    <h3>${content.title}</h3>
                    <p class="mb-0">${content.year} • ⭐ ${content.rating}</p>
                </div>

            </div>

        </div>

    `;
}

$(document).ready(function() {
    const trendingMoviesGrid = $('#filmes_adicionados_recentemente');
    const popularSeriesGrid = $('#series-populares');

    trendingMovies.forEach(movie => {
        trendingMoviesGrid.append(createContentCard(movie));
    });

    popularSeries.forEach(series => {
        popularSeriesGrid.append(createContentCard(series));
    });

    $('input[type="search"]').on('input', function() {
        const searchTerm = $(this).val().toLowerCase();
        $('.content-card').each(function() {
            const title = $(this).find('h3').text().toLowerCase();
            $(this).closest('.col-12').toggle(title.includes(searchTerm));
        });
    });
});