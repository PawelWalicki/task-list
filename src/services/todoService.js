import { ref, push, set, onValue } from "firebase/database";
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