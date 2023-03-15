const personalMovieDB = {
  isPrivate: false,
  movies: {
    'Knock at the cabin': 7,
    'All quiet on the western front': 9,
    'Shrek': 10,
  }
}

function onUpdateButtonPressed() {
  document.querySelector('div').innerHTML = '';

  if (personalMovieDB.isPrivate) {
    showTable();
  } else {
    document.querySelector('div').innerHTML = 'PRIVATE';
  }

  personalMovieDB.isPrivate = !personalMovieDB.isPrivate;
}

const updateButton = document.createElement('button');
updateButton.innerHTML = 'Update';
updateButton.onclick = onUpdateButtonPressed;

document.querySelector('body').prepend(updateButton);

function showTable() {
  const table = document.createElement('table');
  table.classList.add('table');
  table.innerHTML = "<tr><th>Movie</th><th>Score</th></tr>"

  for (key in personalMovieDB.movies) {
    table.innerHTML += `<tr><td>${key}</td><td>${personalMovieDB.movies[key]}</td></tr>`
  }

  document.querySelector('div').append(table);
}
