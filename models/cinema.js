const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function(){
  const results = this.films.map(film => film.title);
  return results;
}

Cinema.prototype.findByTitle = function(filmTitle){
  const results = this.films.filter(film => film.title === filmTitle);
  return results
}

Cinema.prototype.findByGenre = function(filmGenre){
  const results = this.films.filter(film => film.genre === filmGenre);
  return results
}

Cinema.prototype.releaseYearExists = function(year){
  const results = this.films.filter(film => film.year === year);
  return results != []
}


module.exports = Cinema;
