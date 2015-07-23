import React from 'react';
import Rebase from 're-base';
import localforage1 from 'localforage';

import TodoItemList from './Body/TodoItemList.js';
import NewTodo from './Header/NewTodo.js';

//let base = Rebase.createClass('https://procedurized.firebaseio.com/');

let exampleToDo = {
    title: 'This is an example procedure',
    items: [
        {
            completed: false,
            description: 'you must do this'},
        {
            completed: true,
            description: 'already done bitches'
        }
    ]
};

class ToDo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            items: []
        }
    }
    init() {
        //this.setState(exampleToDo);
        //localforage.getItem('todos', (then) => {
        //    console.log(then);
        //});

        localforage.getItem('todos').then((todos) => {
            let todo = todos[this.router.getCurrentParams().tdid - 1];
            this.setState(
                todo
            );
        });

    }
    handleNewTodo(name) {

        let todos;

        let todo = {
            title: name,
            items: []
        };

        localforage.getItem('todos').then((value) => {
            if (value == null) {
                todos = [todo];
            } else {
                todos = value.concat(todo);
            }

            localforage.setItem('todos', todos).then((res) => {
                //console.log(res);
                let position = res.length;
                this.router.transitionTo('todo', {tdid: position})
            });
        });

    }
    handleNewTodoItem() {


    }
    componentWillMount() {
        this.router = this.context.router;
    }
    componentDidMount() {
        this.init();
    }
    render() {
        return (
            <div>
                <NewTodo handleNewTodo={this.handleNewTodo.bind(this)} />< br/>
                <h3>{this.state.title}</h3>
                <TodoItemList items={this.state.items} />
            </div>
        )
    }
}

ToDo.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default ToDo;