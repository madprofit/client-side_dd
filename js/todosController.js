angular.module('TodoApp')
  .controller('TodosController', TodosController)

// allows us to use the todosFactory
TodosController.$inject = ['TodosFactory']

function TodosController(PokemonFactory) {
  var self = this;
  self.api = TodosFactory;

  self.allTodos = [];

  self.api.getAllTodos()
    .success(function(data) {
      console.log("Getting all todos: " + data.todos)
      self.alltodos = data.todos
    })

  self.todos = {};

  self.showTodos = showTodos;

  function showTodos(id) {
    console.log("Show todos: " + id)
    self.api.getOnetodos(id)
      .success(function(todos) {
        self.todos = todos;
        console.log(self.todos)
      })
  }
}
