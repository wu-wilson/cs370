import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = UserAuth();

  const signOut = async () => {
    if (logout) {
      await logout();
      navigate("/login");
    }
  };

  return (
    <div>
      {user && user.email}
      <button onClick={signOut}>Sign out</button>
    </div>
  );
};

export default Dashboard;
