import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const loacation = useLocation();

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user?.email) {
    return children;
  }

  return (
    <Navigate
      to="/login"
      state={{ pathname: loacation.pathname }}
      replace
    ></Navigate>
  );
};

export default PrivateRoute;
