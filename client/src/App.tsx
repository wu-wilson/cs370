import styles from "./App.module.scss";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className={styles["App"]}>
      <Login />
    </div>
  );
};

export default App;
