import {Link}
    from "react-router-dom";
import Nav from "../../nav";
import Classes from "./classes";
import Styles from './styles/index'
import ConditionalOutput
    from "./conditional-output";
import TodoItem from './todo/todo-item'
import TodoList from './todo/todo-list'


function Assignment6() {
    return(
        <div>
            <h1>Assignment 6</h1>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <TodoItem/>
            <TodoList/>
        </div>
    )
}
export default Assignment6;