import React from 'react';

class TodoItem extends React.Component{

    onChange() {
        // do something
        console.log('change detected!');
    }
    render() {
        return (
            <div className="well">
                <input type="checkbox" checked={this.props.item.completed} onChange={this.onChange}/>
                Text: {this.props.item.description}
                </div>
        )
    }
}

export default TodoItem;