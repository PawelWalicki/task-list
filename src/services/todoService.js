import { ref, push, set, onValue, update, remove } from "firebase/database";
import { auth, db } from "../firebase";

export const addTodo = (todoItem) => {
    const user = auth.currentUser
    if (!user) {
        console.error("User not logged in!")
        return
    }

    const uid = user.uid
    const todosRef = ref(db, `todos/${uid}`)
    const newTodoRef = push(todosRef)
    set(newTodoRef, {
        ...todoItem,
        createdAt: new Date().toISOString()
    })
        .then(() => {
            console.log("Added!")
        }).catch((e) => {
            console.error(e)
        })
}

export const getTodos = (setData) => {
    const user = auth.currentUser
    if(!user) {
        console.log("User not logged in!")
        return
    }

    const uid = user.uid
    const todosRef = ref(db, `todos/${uid}`)

    onValue(todosRef, (snapshot) => {
        const data = snapshot.val()
        if(data) {
            const todosArray = Object.keys(data).map((key)=>(({id:key, ...data[key]})))
            setData(todosArray)
        }
    })
}

export const toggleTodo = (todoId, curCompleted) => {
    const user = auth.currentUser
    if(!user) {
        console.log("User not logged in!")
        return
    }

    const uid = user.uid
    const todoRef = ref(db, `todos/${uid}/${todoId}`)

    update(todoRef, {completed: !curCompleted})
        .then(() => console.log("Todo updated"))
        .catch((e)=> console.error("Failed to update with: ", e))
} 

export const deleteTodo = (todoId) => {
    const user = auth.currentUser
    if(!user) {
        console.log("User not logged in!")
    }

    const uid = user.uid
    const todoRef = ref(db, `todos/${uid}/${todoId}`)

    remove(todoRef)
        .then(() => console.log("Todo removed!"))
        .catch((e) => console.error("Failed to remove: ", e))
}