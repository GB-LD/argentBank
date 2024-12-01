import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import loginUserThunk from "../redux/features/authentification/authThunks"

const LoginPage = () => {
  const dispatch = useDispatch()
  const { loading, error, userToken } = useSelector((state) => state.auth)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginUserThunk({email, password}));
  }

  return (
    <div>
    <h1>Login Page</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </label>
      <br />
      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
    <div>user token : {userToken}</div>
    {error && <p style={{ color: "red" }}>{error}</p>}
  </div>
  )
}

export default LoginPage