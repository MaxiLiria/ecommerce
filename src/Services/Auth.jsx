import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'

const Auth = (props) => {
    Auth.propTypes = {
        user: PropTypes.object,
        component: PropTypes.elementType,
      
    }
    const {user, component: Component} = props;

    if (user) return <Component/>;

    if (!user) return <Navigate to="/sign-in" />
}

export default Auth