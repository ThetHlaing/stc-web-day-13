import React from "react";
import { connect } from "react-redux";
import ToDo from "../component/ToDo";

const mapStateToProps = state => ({
  filter : state.filter,
  todos:  state.todos,  
});

const mapDispatchToProps = (dispatch, state) => ({
  toggleTodo: index => dispatch({ type: "TOGGLE_TODO", id: index })
});

class List extends React.Component {

   filterToDos() {
       switch(this.props.filter){
           case 'complete':
            return this.props.todos.filter( item=> item.complete);
           case 'active' : 
            return this.props.todos.filter( item=> !item.complete);
           default: 
            return this.props.todos; 
       }       
   }

  render() {
    const todos = this.filterToDos();
    return (
      <ol>
        {todos.map(todo => (
          <ToDo item={todo} onClick={() => this.props.toggleTodo(todo.id)} />
        ))}
      </ol>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
