import React from 'react';
import Rebase from 're-base';
import localforage1 from 'localforage';

import TodoItemList from './Body/TodoItemList.js';
import NewTodoItem from './Body/NewTodoItem.js';
import NewTodo from './Header/NewTodo.js';

class ToDo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            items: []
        }
    }
    init() {

        localforage.getItem('todos').then((todos) => {
            // arrays start at 0 but we want a more user friendly display so we start at 1 in the url params
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

        // add the new toodo to the list of toodos stored under key 'toodos'
        localforage.getItem('todos').then((value) => {
            if (value == null) {
                todos = [todo];
            } else {
                todos = value.concat(todo);
            }


            localforage.setItem('todos', todos).then((res) => {
                let position = res.length;
                // this is supposed to move us to the newly created toodo- but doesn't seem to work
                this.router.transitionTo('todo', {tdid: position})
            });
        });

    }
    handleNewTodoItem(text) {
        console.log('simulating addition of ', text);
        let elem = this.router.getCurrentParams().tdid - 1;
        localforage.getItem('todos').then((todos) => {
            //console.log(todos, elem);
            //debugger;
            todos[elem].items.push({completed: false, description: text});
            //debugger;

            localforage.setItem('todos', todos).then((res) => {
                this.router.transitionTo('todo', {tdid: elem + 1});
            })

        });
        // we need to refresh the page to show the newly added toodo item
        // the page seems to refresh but doesn't show the newly added item
        //  componentDidMount() doesn't get called?


    }
    componentWillMount() {
        this.router = this.context.router;
    }
    componentDidMount() {
        console.log('called');
        this.init();
    }
    render() {
        return (
            <div>
                <NewTodo handleNewTodo={this.handleNewTodo.bind(this)} />< br/>
                <h3>{this.state.title}</h3>
                <TodoItemList items={this.state.items} />
                <NewTodoItem handleNewTodoItem={this.handleNewTodoItem.bind(this)} />
            </div>
        )
    }
}

ToDo.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default ToDo;