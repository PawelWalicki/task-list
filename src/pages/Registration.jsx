import { useState } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './Registration.css'


export const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault()
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user
                console.log(user)
            })
    }

    return (
        <div>
            <div className="container-registration">
                <h1 className='title'> Registration </h1>
                <form className="container-form">

                    <input
                        className="input"
                        type="email"
                        label="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Email address"
                    />
                    <label htmlFor="email-address"> Email address </label> 

                    <input
                        className="input"
                        type="password"
                        label="Create password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Password"
                    />
                    <label htmlFor="password"> Password </label>

                    <button
                        className="button"
                        type="submit"
                        onClick={onSubmit}
                    >
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    )
}