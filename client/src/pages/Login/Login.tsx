import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Particles from "../../components/Particles/Particles";
import vars from "../../App.module.scss";
import styles from "./Login.module.scss";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const forgotPassword = () => {
    console.log("forgot password");
  };

  const login = () => {
    console.log("login");
  };

  const createAccount = () => {
    navigate("/register");
  };

  return (
    <>
      <Particles num={40} radius={6} color={vars["primary_color"]} />
      <div className={styles["container"]}>
        <div className={styles["card"]}>
          <div className={styles["titles"]}>
            <span className={styles["title"]}>
              Login<span className={styles["period"]}>.</span>
            </span>
            <span className={styles["subtitle"]}>
              Welcome back! Enter your account details to sign in.
            </span>
          </div>
          <div className={styles["input-container"]}>
            <span>Username</span>
            <input
              type="text"
              className={styles["username"]}
              value={username}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setUsername(e.target.value);
              }}
            />
            <span className={styles["input-title"]}>Password</span>
            <input
              type="text"
              className={styles["password"]}
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }}
            />
            <div className={styles["remember-forgot-container"]}>
              <div className={styles["remember-me"]}>
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={() => {
                    setRememberMe(!rememberMe);
                  }}
                />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <div className={styles["forgot"]} onClick={forgotPassword}>
                Forgot password?
              </div>
            </div>
            <div className={styles["login-container"]}>
              <button className={styles["login"]} onClick={login}>
                Login
              </button>
            </div>
          </div>
          <div className={styles["no-account"]} onClick={createAccount}>
            Don't have an account?{" "}
            <span className={styles["sign-up"]}>Sign up!</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
