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
  return results.length > 0;
}

Cinema.prototype.allRuntimesAreOver = function(runtime){
  const results = this.films.filter(film => film['length'] > runtime);
  return results.length === this.films.length;
}

Cinema.prototype.allFilmsRuntime = function(){

const totalRuntime = this.films.reduce( (runningTotal, film) => {
  return runningTotal + film.length;
}, 0);
return totalRuntime
}

Cinema.prototype.filmsByProperty = function(cat, value){
  const results = this.films.filter(film => film[cat] === value);
  return results
}

module.exports = Cinema;
