import { Routes, Route } from "react-router-dom"
import Layout from "../pages/Layout"
import LoginPage from "../pages/LoginPage"
import HomePage from "../pages/HomePage"
import ProfilePage from "../pages/ProfilePage"
import MissingPage from "../pages/MissingPage"
import { Provider } from "react-redux"
import store from "../redux/store"
import RequireAuth from "../redux/features/authentification/RequireAuth"

function App() {

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />} >
          {/* public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />

          {/* protected routes */}
          <Route path="profile" element={<RequireAuth><ProfilePage/></RequireAuth>} />

          {/* catch all */}
          <Route path="*" element={<MissingPage />} />
        </Route>
      </Routes>
    </Provider>
  )
}

export default App
