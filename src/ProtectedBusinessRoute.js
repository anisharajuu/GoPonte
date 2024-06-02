import { Navigate } from "react-router-dom";
import { useBusiness } from "./BusinessContext";

const ProtectedBusinessRoute = ({ children }) => {
  const { business } = useBusiness();

  if (business === null) {
    return <Navigate to="/businesslogin" />;
  }

  return children;
};

export default ProtectedBusinessRoute;
