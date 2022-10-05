import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineLockClosed,
  HiOutlineLockOpen,
} from "react-icons/hi";
import { checkEmail, checkUsername, checkPassword } from "./HelperFunctions";
import axios from "axios";
import Particles from "../../components/Particles/Particles";
import vars from "../../App.module.scss";
import styles from "./Register.module.scss";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [hideErrors, setHideErrors] = useState<boolean>(true);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const checkEmailUnique = async (e: string) => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/getEmailCount/${e}`)
      .then((res) => {
        return res.data[0]["num"] === 0;
      })
      .catch(console.error);
  };

  const checkUsernameUnique = async (u: string) => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/getUsernameCount/${u}`)
      .then((res) => {
        return res.data[0]["num"] === 0;
      })
      .catch(console.error);
  };

  const createAccount = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      checkEmail(email) === "valid" &&
      checkUsername(username) === "valid" &&
      checkPassword(password) === "valid"
    ) {
      console.log("createAccount");
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
            <span className={styles["title"]}>
              Join RACE<span className={styles["period"]}>!</span>
            </span>
            <span className={styles["subtitle"]}>
              Create an account and race to the courts!
            </span>
          </div>
          <form className={styles["form"]} onSubmit={createAccount}>
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
            <span className={styles["input-title"]}>Username</span>
            <span className={styles["input-container"]}>
              <HiOutlineUser className={styles["icon"]} />
              <input
                type="text"
                className={styles["username"]}
                value={username}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setUsername(e.target.value);
                }}
              />
            </span>
            <span className={styles["error"]}>
              {hideErrors || checkUsername(username) === "valid"
                ? null
                : checkUsername(username)}
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
