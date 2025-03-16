import { useState } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './Registration.css'
import { Button, Container, Grid2, TextField } from '@mui/material';


export const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [notice, setNotice] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault()
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user
                console.log(user)
            })
            .catch(e => {
                setNotice("Requirements for email or password are not met!")
            })
    }

    return (
        <Container>
            <h1 className='title'> Registration </h1>
            {"" !== notice &&
                <div role="alert">
                    {notice}
                </div>
            }
            <Grid2 container spacing={2} size="grow" display="flex" justifyContent="center" alignItems="center">
                <Grid2 size={7}>
                    <TextField
                        type="email"
                        label="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
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
                        label="Create password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
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
                    <Button
                        className="button"
                        type="submit"
                        onClick={onSubmit}
                        style={{
                            backgroundColor: "#417f9e",
                            color: "#ffffff",
                        }}>
                        Sign up
                    </Button>
                </Grid2>
            </Grid2>
        </Container>
    )
}