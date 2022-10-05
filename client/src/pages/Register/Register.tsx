import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Particles from "../../components/Particles/Particles";
import vars from "../../App.module.scss";
import styles from "./Register.module.scss";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const createAccount = () => {
    console.log("create account.");
  };

  const loginRedirect = () => {
    navigate("/login");
  };

  return (
    <>
      <Particles num={40} radius={6} color={vars["primary_color"]} />
      <div className={styles["container"]}>
        <div className={styles["card"]}>
          <div className={styles["titles"]}>
            <span className={styles["title"]}>
              Join RACE<span className={styles["period"]}>!</span>
            </span>
            <span className={styles["subtitle"]}>
              Create an account and race to the courts!
            </span>
          </div>
          <div className={styles["input-container"]}>
            <span>Email</span>
            <input
              type="text"
              className={styles["email"]}
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
            />
            <span className={styles["input-title"]}>Username</span>
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
            <div className={styles["button-container"]}>
              <button
                className={styles["create-account"]}
                onClick={createAccount}
              >
                Create Account
              </button>
            </div>
          </div>
          <div className={styles["has-account"]} onClick={loginRedirect}>
            Already have an account?{" "}
            <span className={styles["sign-in"]}>Sign in!</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
