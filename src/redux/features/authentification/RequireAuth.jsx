import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import PropTypes from 'prop-types';

const RequireAuth = ({ children = null }) => {
    // Vérifiez si l'utilisateur est connecté en récupérant l'état depuis Redux
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

    // Si l'utilisateur n'est pas authentifié, redirigez-le vers la page de connexion
    if (!isAuthenticated) {
        return < Navigate to="/login" />
    }

    return children
}

RequireAuth.propTypes = {
    children: PropTypes.node,
  };

export default RequireAuth;