import styles from "./App.module.scss";
import LoginPage from "./LoginPage"
import Title from "./Title"

const App = () => {
  return (
    <div className={styles["App"]}>
      <Title/>
      <LoginPage/>
    </div>
  );
};

export default App;
