import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Login.css";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd)
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        "username": user,
        "password": pwd
      });
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      console.log(response)
      setUser('');
      setPwd('');
      setSuccess(true);
      navigate("/HomepageAuth");
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }

  }

  return (
    <div className="login-container">
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              placeholder="Username"
            ></input>
  
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              placeholder="Password"
            ></input>
            <button onClick={handleSubmit}>LOGIN</button>
  
            {/* Reset Password Link */}
            <Link to="/ForgotPassword">Reset Password</Link>
          </form>
          <Link to="/RegisterForm">Register</Link>
        </section>
      )}
    </div>
  );
};
export default Login;
