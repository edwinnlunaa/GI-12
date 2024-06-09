const tasks = {
    tasks: [{
        text: 'grocery shopping',
        completed: true
    }, {
        text: 'cleean yard',
        completed: false
    }, {
        text: 'film course',
        completed: true
    }] , 
    getTasksToDo(){
        return  this.tasks.filter((task)=> this.getTasksToDo.completed===false)
    }
}

console.log(tasks.getTasksToDo())