import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import router from '../../api/base';

const _loginURL = 'auth/login';

function Login() {
  const [email, setEmail] = useState('thanushkanth3@gmail.com');
  const [password, setPassword] = useState('123456');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const loginData = { email, password }
    console.log(loginData);
    const responce = await router.post(_loginURL, loginData);
    if(responce.status === 200) {
      navigate(from, { replace: true });
    }
    console.log('from server', responce.data);
  }
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <p>Login</p>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" value={email} aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" value={password} id="exampleInputPassword1" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;