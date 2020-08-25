var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

//Forma de armazenamento de To dos dentro do JS - inicio aula
// var todos = [
//   'Fazer café',
//   'Estudar Javascript',
//   'Fazer tutorial Guilherme Rodz no Youtube'
// ]

// var todos depois de ter feito o saveToStorage para quando atualizar a página
var todos = JSON.parse(localStorage.getItem('list_todos')) || []

//Função para renderizar os To dos em tela dentro da lista (li)
//Percorre o array criado acima e mostra tarefa em tela
//utilizar for específico para arrays
function renderTodos() {
  //para não repetir a lista de todos no render
  listElement.innerHTML = ''

  for (todo of todos) {
    //criação de elementos
    var todoElement = document.createElement('li')
    var todoText = document.createTextNode(todo)

    //criar link de excluir todos
    
    var linkElement = document.createElement('a')
    linkElement.setAttribute('href', '#')

    //para achar texto dentro do array e exclui-lo
    var pos = todos.indexOf(todo)
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')

    var linkText = document.createTextNode('Excluir')

    linkElement.appendChild(linkText)

    todoElement.appendChild(todoText)
    todoElement.appendChild(linkElement)

    listElement.appendChild(todoElement)
  }
}

renderTodos()

//função de adicionar tudo - escutar click - recuperar o valor do input - renderizar em tela

function addTodo() {
  var todoText = inputElement.value

  todos.push(todoText)
  inputElement.value = ''
  renderTodos()
  saveToStorage()
}

//para chamar a função acima
buttonElement.onclick = addTodo

//função excluir - pega pela posição do array e não por id
function deleteTodo(pos) {
  todos.splice(pos, 1)
  renderTodos()
  saveToStorage()
}

//função salvar/guardar to-do (é storage local)
function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos))
}