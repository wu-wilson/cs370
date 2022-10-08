import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="*" element={<div>404 Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
