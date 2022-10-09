import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineLockClosed,
  HiOutlineLockOpen,
} from "react-icons/hi";
import { checkEmail, checkPassword } from "./HelperFunctions";
import axios from "axios";
import Particles from "../../components/Particles/Particles";
import vars from "../../App.module.scss";
import styles from "./Register.module.scss";
import { UserAuth } from "../../context/AuthContext";
import { FirebaseError } from "firebase/app";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [error, setError] = useState<string | null>(null);
  const [showError, setShowError] = useState<boolean>(false);

  const [hideErrors, setHideErrors] = useState<boolean>(true);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { createUser } = UserAuth();

  const createAccount = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      checkEmail(email) === "valid" &&
      checkPassword(password) === "valid" &&
      createUser
    ) {
      await createUser(email, password)
        .then(() => {
          navigate("/dashboard");
        })
        .catch((e: FirebaseError) => {
          console.log(e.code);
          switch (e.code) {
            case "auth/email-already-in-use":
              setError(`${email} is already in use.`);
              break;
            default:
              setError("An error occurred. Please try again later.");
              break;
          }
          setShowError(true);
        });
    } else {
      setHideErrors(false);
    }
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
            <span className={styles["title"]}>Join RACE</span>
            <span className={styles["subtitle"]}>
              Create an account and race to the courts!
            </span>
          </div>
          <form className={styles["form"]} onSubmit={createAccount}>
            <div className={styles["error-fb"]}>{showError ? error : null}</div>
            <span>Email</span>
            <span className={styles["input-container"]}>
              <HiOutlineMail className={styles["icon"]} />
              <input
                type="text"
                className={styles["email"]}
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value);
                }}
              />
            </span>
            <span className={styles["error"]}>
              {hideErrors || checkEmail(email) === "valid"
                ? null
                : checkEmail(email)}
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
            <span className={styles["error"]}>
              {hideErrors || checkPassword(password) === "valid"
                ? null
                : checkPassword(password)}
            </span>
            <div className={styles["button-container"]}>
              <input
                type="submit"
                value="Create Account"
                className={styles["create-account"]}
              />
            </div>
          </form>
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
