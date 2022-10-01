import { useState, useEffect, ChangeEvent } from "react";
import styles from "./Register.module.scss"

const Register = () => {
  const [email, setUemail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  function clearInput(){

  }
  return (
    <div className={styles["page"]}>
      <div className={styles["card"]}>
        <div className={styles["title"]}>Register</div>
        <div className={styles["subtitle"]}>Create an account to view court availability with your friends</div>
        <div className={styles["inputTitle"]}>Email</div>
        <input
          type="text"
          className={styles["username"]}
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setUsername(e.target.value);
          }}
        />

        <div className={styles["inputTitle"]}>Username</div>
        <input
          type="text"
          className={styles["password"]}
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
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

        <div className={styles["inputTitle"]}>Confirm Password</div>
        <input
          type="text"
          className={styles["password"]}
          value={confirmPassword}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
        />

        <button className={styles['button']} onClick={clearInput}>Create Account</button>

      </div>
    </div>
  );
};

export default Register;
