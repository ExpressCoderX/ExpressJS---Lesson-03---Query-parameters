var express = require('express');
var app = express();
var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views')

var todos = [
    { id: 1, name: 'Name A', job: 'Cook'},
    { id: 2, name: 'Name B', job: 'Study'},
    { id: 3, name: 'Name C', job: 'Cook'},
    { id: 4, name: 'Name D', job: 'Cook'},
    { id: 5, name: 'Name E', job: 'Run'},
]        

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Name A'
    });
});

app.get('/todos', (request, response) => {
    response.render('todos/index', {
        todos: todos
    });    
});

// ----------------------Create----------------------
app.get('/todos/create', (request, response) =>{
    response.render('todos/create')
})


app.get('/todos/search', (request, response) => {
    var q = request.query.q;
    var fillterTodos = todos.filter(todo =>{
        return todo.job.indexOf(q) !== -1;                
    });    
    response.render('todos/index', {
        todos: fillterTodos
    })
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})