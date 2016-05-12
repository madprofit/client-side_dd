angular.module('TodoApp')
  .factory('TodosFactory', TodosFactory)

// allows us to use $http
TodosFactory.$inject = ['$http']

function TodosFactory($http) {
  // the URLs of the API we're talking to
  var pokedexURL = 'http://pokeapi.co/api/v1/pokedex/1'
  var pokemonURL = 'http://pokeapi.co/'

  var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  };
  app.use(allowCrossDomain);



  var pokeFactory = {};

  // basically an index function: this gets ALL the pokemon
  pokeFactory.getAllPokemon = function() {
    return $http.get(pokedexURL)
  }

  // basically a show function: this gets ONE pokemon
  pokeFactory.getOnePokemon = function(id) {
    return $http.get(pokemonURL + id)
  }

  // this makes the pokeFactory and all of its functions available to us when we inject this factory into our controller
  return pokeFactory
}
