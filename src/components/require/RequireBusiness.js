import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useBusiness } from "../../hooks/BusinessContext";

const RequireBusiness = () => {
    const {business} = useBusiness()
    const location = useLocation()

    return (
        business?.id
            ? <Outlet />
            : <Navigate to="/businesslogin" state={{ from: location }} replace />
    );
}

export default RequireBusiness;
