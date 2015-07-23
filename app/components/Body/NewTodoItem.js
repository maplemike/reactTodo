import React from 'react';

class NewTodoItem extends React.Component{
    handleSubmit() {
        // do something
        var text = this.refs.tditem.getDOMNode().value;
        this.refs.tditem.getDOMNode().value = '';
        this.props.handleNewTodoItem(text);
    }
    render() {
        return (
            <div className="col-sm-12">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group col-sm-7">
                        <input type="text" className="form-control" ref="tditem" placeholder="What has to be done?" />
                    </div>
                    <div className="form-group col-sm-5">
                        <button type="submit" className="btn btn-block btn-primary">Add to List</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewTodoItem;