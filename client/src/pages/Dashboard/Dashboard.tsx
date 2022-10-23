import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from 'react'
import { UserAuth } from "../../context/AuthContext";
import styles from "./Dashboard.module.scss";

import basketball  from './basketball.webp';
import volleyball  from './volleyball.jpeg';
import tennis  from './tennis.jpeg';
import soccer  from './soccer.jpeg';


const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = UserAuth();
  const signOut = async () => {
    if (logout) {
      await logout();
      navigate("/login");
    }
  };
  const[open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  /*
  const myFunction = async () => {
      document.getElementById("myDropdown").classList.toggle("show");
  }
  */






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
        <div className={styles["side_panel_headers"]}>
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
          <img style={{ width: 250, height: 100 }} src={basketball} alt="basketball"/>
          <br/>
          <span className={styles["court_name"]}> Basketball Courts </span>
          <button onClick={handleOpen}> + </button>
          {open ? (
            <div className={styles["court_name"]}>
                <button> Court 1 </button> <br/>
                <button> Court 2 </button>
            </div>
          ) : null}
        </div>
        <div className={styles["center_card"]}>
        <img style={{ width: 250, height: 150 }} src={soccer} alt="soccer"/>
        <span className={styles["court_name"]}> Soccer Fields </span>
          <button onClick={handleOpen}> + </button>
          {open ? (
            <div className={styles["court_name"]}>
                <button> Court 1 </button> <br/>
                <button> Court 2 </button>
            </div>
          ) : null}
        </div>
        <div className={styles["center_card"]}>
          <img style={{ width: 250, height: 150 }} src={volleyball} alt="volleyball"/>
          <br/>
          <span className={styles["court_name"]}> Volleyball Courts </span>
          <button onClick={handleOpen}> + </button>
          {open ? (
            <div className={styles["court_name"]}>
                <button> Court 1 </button> <br/>
                <button> Court 2 </button>
            </div>
          ) : null}
        </div>
        <div className={styles["center_card"]}>
          <img style={{ width: 250, height: 150 }} src={tennis} alt="tennis"/>
          <br/>
          <span className={styles["court_name"]}> Tennis Courts </span>
          <button onClick={handleOpen}> + </button>
          {open ? (
            <div className={styles["court_name"]}>
                <button> Court 1 </button> <br/>
                <button> Court 2 </button>
            </div>
          ) : null}
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
