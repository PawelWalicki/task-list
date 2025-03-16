import { addTodo } from "../services/todoService"
import { Button, Container, Grid2, TextField } from "@mui/material"
import { useState } from "react"
export const AddTodo = () => {

    const [value, setValue] = useState("")

    const handleAddTodo = () => {
        addTodo({ text: value, completed: false })
        setValue("")
    }

    const handleKeyPress = (e) => {
        if(e.key == "Enter") {
            handleAddTodo()
        }
    }

    return (
        <Grid2 container spacing={2} size="grow">
            <Grid2 display="felx" justifyContent="center" alignItems="center" size={10}>
                <TextField value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyPress} label="Write task" variant="outlined" fullWidth sx={{
                    "& .MuiOutlinedInput-root": {
                        color: "#417f9e",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#417f9e",
                            borderWidth: "2px",
                        },
                    },
                    "& .MuiInputLabel-outlined": {
                        color: "#417f9e",
                    },
                }}> </TextField>
            </Grid2>
            <Grid2 display="flex" justifyContent="center" alignItems="center" size={2}>
                <Button className="todo-button" color="steelBlue" onClick={() => handleAddTodo()} variant="contained"
                    style={{
                        backgroundColor: "#417f9e",
                        color: "#ffffff",
                    }}>ADD</Button>
            </Grid2>
        </Grid2>
    )
}