import React from 'react';

import TodoItem from './TodoItem.js';


class TodoItemList extends React.Component{
    render() {
        let items = this.props.items.map((item, index) => {
            return (
                <li className="list-group-item" key={index}>
                    <TodoItem item={item} />
                </li>
            )
        });
        return (
            <div>
                <h3>ToDo Items</h3>
                <ul className="list-group">
                    {items}
                </ul>
            </div>
        )
    }
}

export default TodoItemList;