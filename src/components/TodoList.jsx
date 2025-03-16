import { Checkbox, IconButton, List, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"
import { deleteTodo, toggleTodo } from "../services/todoService";

export function TodoList({todos}) {
    return (
        <List>
            {
                todos.sort((a,b) => a.completed - b.completed).map(todo => (
                    <ListItem key={todo.id} secondaryAction={
                        <IconButton edge="end" onClick={()=>deleteTodo(todo.id)}>
                            <DeleteIcon/>
                        </IconButton>
                    } sx={{backgroundColor:"#e2e2e2", borderRadius: '8px', padding: '8px', margin:"5px" }}>
                        <Checkbox onChange={() => toggleTodo(todo.id, todo.completed)} checked={todo.completed}/>
                        <ListItemText primary={todo.text} style={{textDecoration: todo.completed ? "line-through" : "none"}}/>
                    </ListItem>
                ))
            }
        </List>
    )
}