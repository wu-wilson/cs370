import Particles from "../../components/Particles/Particles";
import { HiOutlineUser } from "react-icons/hi";
import { ChangeEvent, FormEvent, useState } from "react";
import vars from "../../App.module.scss";
import styles from "./ResetPassword.module.scss";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");

  const { resetPassword } = UserAuth();

  const reset = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (resetPassword) {
        await resetPassword(email);
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Particles num={40} radius={6} color={vars["primary_color"]} />
      <div className={styles["container"]}>
        <div className={styles["card"]}>
          <div className={styles["titles"]}>
            <span className={styles["title"]}>Reset Password</span>
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
                value="Send Reset Password Email"
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
