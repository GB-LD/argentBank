import { Routes, Route } from "react-router-dom"
import Layout from "../pages/Layout"
import LoginPage from "../pages/LoginPage"
import HomePage from "../pages/HomePage"
import ProfilePage from "../pages/ProfilePage"
import MissingPage from "../pages/MissingPage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        {/* public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />

        {/* protected routes */}
        <Route path="profile" element={<ProfilePage />} />

        {/* catch all */}
        <Route path="*" element={<MissingPage />} />
      </Route>
    </Routes>
  )
}

export default App
