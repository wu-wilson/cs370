import styles from "./Login.module.scss";
import { useState, useEffect, ChangeEvent } from "react";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const forgotPassword = () => {
    console.log("forgot password");
  };
  const createAccount = () => {
    console.log("create account");
  };

  const login = () => {
    console.log("login");
  };

  useEffect(() => {
    console.log("Remember Me: " + rememberMe);
  }, [rememberMe]);

  useEffect(() => {
    console.log("Username: " + username);
  }, [username]);

  useEffect(() => {
    console.log("Password: " + password);
  }, [password]);

  return (
    <div className={styles["page"]}>
      <div className={styles["card"]}>
        <div className={styles["title"]}>Rec Hub</div>
        <div className={styles["subtitle"]}>Created by Five Guys</div>
        <div className={styles["inputTitle"]}>Email</div>
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
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
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
          Don't have an account?
        </div>
      </div>
    </div>
  );
};

export default Login;
