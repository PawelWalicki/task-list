import { Checkbox, IconButton, List, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"

export function TodoList({todos}) {
    return (
        <List>
            {
                todos.map(todo => (
                    <ListItem key={todo.id} secondaryAction={
                        <IconButton edge="end" onClick={()=>console.log("Delete")}>
                            <DeleteIcon/>
                        </IconButton>
                    }>
                        <Checkbox onChange={() => console.log("Checked")} checked={todo.completed}/>
                        <ListItemText primary={todo.text} style={{textDecoration: todo.completed ? "line-through" : "none"}}/>
                    </ListItem>
                ))
            }
        </List>
    )
}