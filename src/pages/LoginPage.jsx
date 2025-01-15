import { faCircleUser, faSignIn} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import loginUserThunk from "../redux/features/authentification/authThunks"
import { useNavigate, useNavigationType } from "react-router-dom"

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const navigationType = useNavigationType()
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginUserThunk({email, password}));
  }

  useEffect(() => {
    if (isAuthenticated) {
      if (navigationType !== "POP") {
        navigate("/profile")
      } else {
        navigate("/");
      }
    }
  }, [isAuthenticated, navigate, navigationType])

  return (
    <main className="main bg-light">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} className='faCircleUser'/>
        <FontAwesomeIcon icon={faSignIn} className='faSignIn'/>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className='input-wrapper'>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='password'>Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" disabled={loading} className='sign-in-button'>
            {loading ? "Logging in..." : "Sign In"}
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </section>
    </main>
  )
}

export default LoginPage