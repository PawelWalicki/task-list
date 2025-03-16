import './Todo.css'
import { TodoList } from "./TodoList"
import { Container, Grid2 } from "@mui/material"
import { AddTodo } from "./AddTodo"

export const Todo = ({ todos }) => {
    return (

        <Container>
            <AddTodo />
            <Grid2>
                <TodoList todos={todos}></TodoList>
            </Grid2>
        </Container>
    )
}