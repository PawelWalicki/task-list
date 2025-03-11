import { auth, db } from "../firebase"
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuth } from "../hooks/useAuth";
import { Todo } from "../components/Todo";
import './HomePage.css'
import { useEffect, useState } from "react";
import { getTodos } from "../services/todoService";

export const HomePage = () => {
    const navigate = useNavigate();
    const { user, pending } = useAuth()
    const [todos, setTodos] = useState([])
    console.log(user, pending)
    const logoutUser = async (e) => {
        e.preventDefault();

        await signOut(auth);
        navigate("/");
    }

    useEffect(() => {
        getTodos(setTodos)
    },[user])

    if (pending) {
        return (
            <div>Loading...</div>
        )
    }
    if (!user) {
        return (
            <div className="container-home">
                <div> User not logged in! </div>
                <div className="container-button">
                    <button className="button" onClick={() => navigate("./user")}>Sign in!</button>
                    <button className="button" onClick={() => navigate("./register")}>Register!</button>
                </div>
            </div>
        )
    }


    return (
        <div >
            <div className="info-user">
                <p className="user">Welcome {user.email}</p>

                <div>
                    <button type="submit" className="button" onClick={(e) => logoutUser(e)}>Logout</button>
                </div>
            </div>
            <Todo todos={todos}/>
        </div>
    )
}