import { faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet, useLocation, NavLink } from "react-router-dom"

const Layout = () => {
  const location = useLocation()
  const isOnHomePage = location.pathname === '/'

  return (
    <>
      <header>
          <nav className="main-nav">
          <NavLink className="main-nav-logo" to="/">
            <img
              className="main-nav-logo-image"
              src="src/assets/img/argentBankLogo.png"
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </NavLink>
          { isOnHomePage &&
          <NavLink className="main-nav-item" to="/login">
              <FontAwesomeIcon icon={faCircleUser} className='faCircleUser'/>
              Sign In
          </NavLink>
          }
        </nav>
      </header>
      <>
          <Outlet />
      </>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </>
  )
}

export default Layout