import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, TextField, Grid2 } from "@mui/material";
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
                <form className="container-form">
                    {"" !== notice &&
                        <div role="alert"> 
                            {notice}
                        </div>
                    }
                    <h1>Sign in</h1>
                    <Container>                        
                        <Grid2 container spacing={2} size="grow" display="flex" justifyContent="center" alignItems="center">
                            <Grid2 size={7}>
                                <TextField
                                    type="email"
                                    label="Email address"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="name@example.com"
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                    fullWidth
                                    sx={{
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
                                    }}
                                />
                            </Grid2>
                            <Grid2 size={7}>
                                <TextField
                                    type="password"
                                    label="Password"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                    fullWidth
                                    sx={{
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
                                    }}
                                />
                            </Grid2>
                            <Grid2 display="flex" justifyContent="center" alignItems="center" size={7}>
                                <Button type="submit" className="button" onClick={(e) => loginWithUsernameAndPassword(e)} style={{
                                    backgroundColor: "#417f9e",
                                    color: "#ffffff",
                                }}>Submit</Button>
                            </Grid2>
                        </Grid2>
                    </Container>

                    <div>
                        <span>Need to sign up for an account? <Link to="/register">Click here.</Link></span>
                    </div>
                </form>
        </div>
    )
}
