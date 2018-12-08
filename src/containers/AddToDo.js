import React from 'react';
import {connect} from 'react-redux';
import {addtodo_action} from '../actions';

const mapDispatchToProps = (dispatch) => ({
    addToDo : (value) => dispatch(addtodo_action(value))
});

class AddToDo extends React.Component{
    constructor(props){
        super(props);
        this.input = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }   
    
    handleSubmit(event){
        event.preventDefault();
        const value = this.input.current.value;
        this.props.addToDo(value);
        this.input.current.value = "";
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input ref={this.input}></input>
                    <button>Add To Do</button>                    
                </form>
            </div>
        );
    }
}

export default connect(null,mapDispatchToProps)(AddToDo);