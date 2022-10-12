import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = UserAuth();

  const signOut = async () => {
    if (logout) {
      await logout();
      navigate("/login");
    }
  /*
  const myFunction = async () => {
      document.getElementById("myDropdown").classList.toggle("show");
  }
  */

  };



// I'd like for the card to go all the way across the screen... not sure how to do this.
  return (
    <>
    <div className={styles["container_col"]}>
      <div className={styles["header_card"]}>
        <div className={styles["headers"]}>
          <span className={styles["header"]}>Dashboard</span>
        </div>
        <div className={styles["headers"]}>
          {user && user.email}
          <button onClick={signOut}>Sign Out</button>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <div className={styles["container_col"]}>
      <div className={styles["side_panel"]}>
        <div className={styles["headers"]}>
          <button> Upcoming</button>
          <button> Passed</button>
        </div>
        <div className={styles["court_card"]}>
          <span className={styles["court_name"]}> Court 1 </span> <br/>
          <span className={styles["info"]}> 10:00-11:00 </span> <br/>
          <span className={styles["info"]}> 2 Participants </span>
        </div>
        <div className={styles["court_card"]}>
          <span className={styles["court_name"]}> Court 2 </span> <br/>
          <span className={styles["info"]}> 10:00-11:00 </span> <br/>
          <span className={styles["info"]}> 2 Participants </span>
        </div>
        <div className={styles["court_card"]}>
          <span className={styles["court_name"]}> Court 3 </span> <br/>
          <span className={styles["info"]}> 10:00-11:00 </span> <br/>
          <span className={styles["info"]}> 2 Participants </span>
        </div>
        <div className={styles["court_card"]}>
          <span className={styles["court_name"]}> Court 4 </span> <br/>
          <span className={styles["info"]}> 10:00-11:00 </span> <br/>
          <span className={styles["info"]}> 2 Participants </span>
        </div>
        <div className={styles["court_card"]}>
          <span className={styles["court_name"]}> Court 5 </span> <br/>
          <span className={styles["info"]}> 10:00-11:00 </span> <br/>
          <span className={styles["info"]}> 2 Participants </span>
        </div>
      </div>
      <div className={styles["center_panel"]}>
        <div className={styles["headers"]}>
          <span className={styles["header"]}>Create a Reservation</span>
        </div>
        <div className={styles["center_card"]}>
          <button> + </button>
          <span className={styles["court_name"]}> Court Type 1 </span>
        </div>
        <div className={styles["center_card"]}>
          <button> + </button>
          <span className={styles["court_name"]}> Court Type 2 </span>
        </div>
        <div className={styles["center_card"]}>
          <button> + </button>
          <span className={styles["court_name"]}> Court Type 3 </span>
        </div>
        <div className={styles["center_card"]}>
          <button> + </button>
          <span className={styles["court_name"]}> Court Type 4 </span>
        </div>
        <div className={styles["center_card"]}>
          <button> + </button>
          <span className={styles["court_name"]}> Court Type 5 </span>
        </div>
      </div>
    </div>
  </>
/*
      <div className={styles["dropdown"]}>
        <button onClick={myFunction} className={styles["dropbtn"]}> Dropdown </button>
        <div id="myDropdown" className={styles["dropdown-content"]}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
*/



  );
};

export default Dashboard;
