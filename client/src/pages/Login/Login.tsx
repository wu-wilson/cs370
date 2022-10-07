import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineLockClosed,
  HiOutlineLockOpen,
} from "react-icons/hi";
import Particles from "../../components/Particles/Particles";
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  inMemoryPersistence,
} from "firebase/auth";
import vars from "../../App.module.scss";
import styles from "./Login.module.scss";
import { UserAuth } from "../../context/AuthContext";
import firebase, { auth } from "../../firebase";

const Login = () => {
  const navigate = useNavigate();

  const { login } = UserAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const forgotPassword = () => {
    console.log("forgot password");
  };

  const signIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (login) {
        await login(email, password);
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const registerRedirect = () => {
    navigate("/register");
  };

  useEffect(() => {
    setPersistence(
      auth,
      rememberMe ? browserLocalPersistence : browserSessionPersistence
    );
  }, [rememberMe]);

  return (
    <>
      <Particles num={40} radius={6} color={vars["primary_color"]} />
      <div className={styles["container"]}>
        <div className={styles["card"]}>
          <div className={styles["titles"]}>
            <span className={styles["title"]}>
              Login<span className={styles["period"]}>!</span>
            </span>
            <span className={styles["subtitle"]}>
              Welcome back! Enter your account details to sign in.
            </span>
          </div>
          <form className={styles["form"]} onSubmit={signIn}>
            <span>Email</span>
            <span className={styles["input-container"]}>
              <HiOutlineUser className={styles["icon"]} />
              <input
                type="text"
                className={styles["email"]}
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value);
                }}
              />
            </span>
            <span className={styles["input-title"]}>Password</span>
            <span className={styles["input-container"]}>
              {showPassword ? (
                <HiOutlineLockOpen
                  className={styles["icon"] + " " + styles["lock"]}
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <HiOutlineLockClosed
                  className={styles["icon"] + " " + styles["lock"]}
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
              <input
                type={showPassword ? "text" : "password"}
                className={styles["password"]}
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setPassword(e.target.value);
                }}
              />
            </span>
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
              <input type="submit" value="Login" className={styles["login"]} />
            </div>
          </form>
          <div className={styles["no-account"]} onClick={registerRedirect}>
            Don't have an account?{" "}
            <span className={styles["sign-up"]}>Sign up!</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
