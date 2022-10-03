import styles from "./App.module.scss";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className={styles["App"]}>
      {/* Comment out or delete <Register /> out to see login. */}
      {/* <Register/> */}
      <Login />
    </div>
  );
};

export default App;
