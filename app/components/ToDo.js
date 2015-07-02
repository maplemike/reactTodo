import React from 'react';
import Rebase from 're-base';

import TodoItemList from './Body/TodoItemList.js';

//let base = Rebase.createClass('');

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
        this.setState(exampleToDo);
    }
    componentWillMount() {
        this.init();
    }
    render() {
        return (
            <div>
                <TodoItemList items={this.state.items} />
            </div>
        )
    }

}

export default ToDo;