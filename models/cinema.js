const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function(){
  const results = this.films.map(film => film.title);
  return results;
  
}

module.exports = Cinema;
