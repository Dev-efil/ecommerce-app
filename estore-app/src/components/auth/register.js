import { useState } from "react";
import router from '../../api/base';

const _registerURL = 'uth/register';

function Register() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleRegister = async (e) => {
        e.preventDefault();
        const registerData = { name, email, password }
        console.log(registerData);
        const responce = await router.post(_registerURL, registerData);
        console.log('from server',responce.data);
    }
    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <p>Register</p>
                        <form onSubmit={handleRegister}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Email" className="form-label">Email address</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="Email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;