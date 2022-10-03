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
    <div className={styles["container"]}>
      <Particles num={40} radius={3} color={vars["primary_color"]} />
      <div className={styles["card"]}>
        <div className={styles["title"]}>
          Login<span className={styles["period"]}>.</span>
        </div>
        <div className={styles["subtitle"]}>
          Welcome back! Enter your details to sign into your account.
        </div>
        <div className={styles["inputTitle"]}>Username</div>
        <input
          type="text"
          className={styles["username"]}
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setUsername(e.target.value);
          }}
        />
        <div className={styles["inputTitle"]}>Password</div>
        <input
          type="text"
          className={styles["password"]}
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
        />
        <div className={styles["rememberForgotContainer"]}>
          <div className={styles["rememberMe"]}>
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => {
                setRememberMe(!rememberMe);
              }}
            ></input>
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <div className={styles["forgot"]} onClick={forgotPassword}>
            Forgot password?
          </div>
        </div>
        <div className={styles["loginContainer"]}>
          <button className={styles["login"]} onClick={login}>
            Login
          </button>
        </div>
        <div className={styles["dontHaveAccount"]} onClick={createAccount}>
          Don't have an account?{" "}
          <span className={styles["signUp"]}>Sign up!</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
