import React from 'react';

class NewTodo extends React.Component{
    handleSubmit() {
        //var router = this.context.router;
        var name = this.refs.tdname.getDOMNode().value;
        this.refs.tdname.getDOMNode().value = '';
        this.props.handleNewTodo(name);
    }
    render() {
        return (
            <div className="col-sm-12">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group col-sm-7">
                        <input type="text" className="form-control" ref="tdname" placeholder="New procedure name..." />
                    </div>
                    <div className="form-group col-sm-5">
                        <button type="submit" className="btn btn-block btn-primary">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewTodo;