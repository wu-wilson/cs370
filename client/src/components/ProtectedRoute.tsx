import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ReactNode, useEffect } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const { user } = UserAuth();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return <>{children}</>;
};

export default ProtectedRoute;
