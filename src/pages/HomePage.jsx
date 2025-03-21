import { auth } from "../firebase"
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuth } from "../hooks/useAuth";
import { Todo } from "../components/Todo";
import './HomePage.css'
import { useEffect, useState } from "react";
import { getTodos } from "../services/todoService";
import { Button } from "@mui/material";
import { Footer } from "../components/Footer";

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
    }, [user])

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
                    <Button className="button" onClick={() => navigate("./user")} style={{
                        backgroundColor: "#417f9e",
                        color: "#ffffff",
                    }}> Sign in!</Button>
                    <Button className="button" onClick={() => navigate("./register")} style={{
                        backgroundColor: "#417f9e",
                        color: "#ffffff",
                    }}>Register!</Button>
                </div>
                <Footer />
            </div>
        )
    }


    return (
        <div >
            <div className="info-user">
                <img className="img" src="/task-icon2.png"></img>
                <p className="user">Welcome {user.email}</p>

                <div>
                    <Button type="submit" className="button" onClick={(e) => logoutUser(e)} style={{
                        backgroundColor: "#417f9e",
                        color: "#ffffff",
                    }}>Logout</Button>
                </div>
            </div>
            <Todo todos={todos} />
            <Footer />
        </div>
    )
}