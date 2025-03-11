import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "./User.css"

export const User = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");

    const loginWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch {
            setNotice("You entered a wrong username or password.");
        }
    }

    return (
        <div>
            <div className="container-user" >
                <form className="container-form">
                    {"" !== notice &&
                        <div role="alert">
                            {notice}
                        </div>
                    }

                    <input type="email" className="input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <label htmlFor="exampleInputEmail1"> Email address</label>

                    <input type="password" className="input" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <label htmlFor="exampleInputPassword1"> Password</label>

                    <button type="submit" className="button" onClick={(e) => loginWithUsernameAndPassword(e)}>Submit</button>

                    <div>
                        <span>Need to sign up for an account? <Link to="/register">Click here.</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}
