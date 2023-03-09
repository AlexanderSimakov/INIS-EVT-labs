// <-- Strings -->
let movieCountQuestion = 'Сколько фильмов вы уже посмотрели?';
let lastMovieNameQuestion = 'Один из последних просмотренных фильмов?';
let scoreQuestion = 'На сколько оцените его?';
let errorPrefixMessage = 'Введите корректное значение.';

let personalMovieDB = {
    count: null,
    movies: {},
};


// <-- Entry point -->
main();
// <-- Entry point -->


// <-- Functions -->
function main() {
    const REPETITIONS = 2;

    let movieCount = readNumber(movieCountQuestion, errorPrefixMessage);
    personalMovieDB.count = movieCount;

    for (let i = 0; i < REPETITIONS; i++) {
        askQuestions();
    }
}

function askQuestions() {
    let movieName = readString(lastMovieNameQuestion, errorPrefixMessage);
    let movieScore = readScore(scoreQuestion, errorPrefixMessage);

    personalMovieDB.movies[movieName] = movieScore;

    console.log(personalMovieDB);
}

function readNumber(message, errorPrefixMessage) {
    let errorMessage = errorPrefixMessage + ' ' + message;
    let value = prompt(message);

    while (!value || value.length > 50 || !Number(value) || Number(value) < 0) {
        value = prompt(errorMessage);
    }

    return value
}

function readScore(message, errorPrefixMessage) {
    let errorMessage = errorPrefixMessage + ' ' + message;
    let value = prompt(message);

    while (!value || value.length > 50 || !Number(value) || Number(value) < 0 || Number(value) > 10) {
        value = prompt(errorMessage);
    };

    return value
}

function readString(message, errorPrefixMessage) {
    let errorMessage = errorPrefixMessage + ' ' + message;
    let value = prompt(message);

    while (!value || value.length > 50) {
        value = prompt(errorMessage);
    }

    return value;
}