import Particles from "../../components/Particles/Particles";
import { HiOutlineUser } from "react-icons/hi";
import { ChangeEvent, useState } from "react";
import vars from "../../App.module.scss";
import styles from "./ResetPassword.module.scss";

const ResetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const reset = () => {};

  return (
    <>
      <Particles num={40} radius={6} color={vars["primary_color"]} />
      <div className={styles["container"]}>
        <div className={styles["card"]}>
          <div className={styles["titles"]}>
            <span className={styles["title"]}>
              Reset Password<span className={styles["period"]}>.</span>
            </span>
            <span className={styles["subtitle"]}>
              Enter the email associated with your account to receive a link to
              reset your password.
            </span>
          </div>
          <form className={styles["form"]} onSubmit={reset}>
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
            <div className={styles["reset-container"]}>
              <input
                type="submit"
                value="Reset Password"
                className={styles["reset"]}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
