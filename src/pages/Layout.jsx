import { faCircleUser, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet, useLocation, NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout } from '../redux/features/authentification/authSlice';

const Layout = () => {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector((state) => state.auth)
  const { userProfile } = useSelector((state) => state.profile)
  const location = useLocation()
  const isOnLoginPage = location.pathname === '/login'

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
          { isAuthenticated && !isOnLoginPage ? (
              <div className='log-section'>
                <NavLink to="/profile">
                  <FontAwesomeIcon icon={faCircleUser} className='faCircleUser'/>
                </NavLink>
                <div>{ userProfile?.firstName }</div>
                <button onClick={() => dispatch(logout())}>
                  <FontAwesomeIcon icon={faRightFromBracket} className='faRightFromBracket'/>
                  <p>Sign out</p>
                </button>
              </div>
            ) : null
          }
          { !isAuthenticated && !isOnLoginPage &&
          <NavLink className="main-nav-item sign-in-button" to="/login">
              <FontAwesomeIcon icon={faCircleUser} className='faCircleUser homeStyle'/>
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