import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from 'react'
import { UserAuth } from "../../context/AuthContext";
import styles from "./Dashboard.module.scss";

import basketball  from './basketball.webp';
import volleyball  from './volleyball.jpeg';
import tennis  from './tennis.jpeg';
import soccer  from './soccer.jpeg';

//SOURCES USED:
/*
// https://www.robinwieruch.de/react-dropdown/
//    -> helped create the drop downs
// https://stackoverflow.com/questions/62842192/getting-broken-image-icon-on-react-app-on-every-image
//    -> helped allow me to use images
// https://stackabuse.com/resizing-images-with-react/
//    -> helped resize images
*/
/*
Helped with layout and alignment:
http://www.java2s.com/example/html-css/css-layout/align-two-divs-one-at-top-one-at-bottom-within-its-container-div.html
https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
https://medium.com/@kalebjdavenport/how-to-create-a-grid-layout-in-react-native-7948f1a6f949
https://stackoverflow.com/questions/6632340/place-a-button-right-aligned
https://stackoverflow.com/questions/70503910/align-the-items-to-top-of-the-card
https://webmasters.stackexchange.com/questions/44789/aligning-3-divs
https://stackoverflow.com/questions/24094786/how-to-make-divs-float-on-both-ends-of-another-div
https://smallbusiness.chron.com/navigation-bar-under-header-css-46501.html
*/
/*
https://www.youtube.com/watch?v=t8JK5bVoVBw&ab_channel=LogRocket
https://www.youtube.com/watch?v=AcOjmZrcxfM&ab_channel=HongLyTech
https://dev.to/mcrowder65/how-to-center-elements-horizontally-on-a-create-react-app-project-1omn
https://www.youtube.com/watch?v=hQAHSlTtcmY&ab_channel=WebDevSimplified
https://www.youtube.com/watch?v=75XmHauQNdA&ab_channel=GraceHopperAcademy
https://www.youtube.com/watch?v=lIM5YQyZ3pc&list=PLS1QulWo1RIa3Q24UOH0DaOBxHNmwJOeO&ab_channel=ProgrammingKnowledge
https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/#create-a-todo-type
*/

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
          <button id={styles["floatRight"]} onClick={signOut}>Sign Out</button>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <div className={styles["container_col"]}>
      <div id = {styles['leftCol']} className={styles["side_panel"]}>
        <div className={styles["side_panel_headers"]}>
          <button> Upcoming</button>
          <button> Passed</button>
        </div>
        <div>
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
          <div className={styles["court_card"]}>
            <span className={styles["court_name"]}> Court 5 </span> <br/>
            <span className={styles["info"]}> 10:00-11:00 </span> <br/>
            <span className={styles["info"]}> 2 Participants </span>
          </div>
          <div className={styles["court_card"]}>
            <span className={styles["court_name"]}> Court 5 </span> <br/>
            <span className={styles["info"]}> 10:00-11:00 </span> <br/>
            <span className={styles["info"]}> 2 Participants </span>
          </div>
          <div className={styles["court_card"]}>
            <span className={styles["court_name"]}> Court 5 </span> <br/>
            <span className={styles["info"]}> 10:00-11:00 </span> <br/>
            <span className={styles["info"]}> 2 Participants </span>
          </div>
          <div className={styles["court_card"]}>
            <span className={styles["court_name"]}> Court 5 </span> <br/>
            <span className={styles["info"]}> 10:00-11:00 </span> <br/>
            <span className={styles["info"]}> 2 Participants </span>
          </div>
          <div className={styles["court_card"]}>
            <span className={styles["court_name"]}> Court 5 </span> <br/>
            <span className={styles["info"]}> 10:00-11:00 </span> <br/>
            <span className={styles["info"]}> 2 Participants </span>
          </div>
          <div className={styles["court_card"]}>
            <span className={styles["court_name"]}> Court 5 </span> <br/>
            <span className={styles["info"]}> 10:00-11:00 </span> <br/>
            <span className={styles["info"]}> 2 Participants </span>
          </div>
        </div>
      </div>
      <div className={styles["center_panel"]}>
          <div className={styles["headers"]}>
            <span className={styles["header"]}>Create a Reservation</span>
          </div>
          <div className={styles["center_card"]}>
            <img style={{ width: 250, height: 150 }} src={basketball} alt="basketball"/>
            <br/>
            <span className={styles["court_name"]}> Basketball Courts </span>
            <button id={styles["floatRight"]} onClick={handleOpen}> + </button>
            {open ? (
              <div className = {styles['dropdown_card']}>
                <div id={styles["floatLeft"]}> Court 1 </div>
                <button id={styles["floatRight"]}> reserve </button>
              </div>
            ) : null}
          </div>
          <div className={styles["center_card"]}>
          <img style={{ width: 250, height: 150 }} src={soccer} alt="soccer"/>
          <span className={styles["court_name"]}> Soccer Fields </span>
            <button id={styles["floatRight"]} onClick={handleOpen}> + </button>
            {open ? (
              <div className = {styles['dropdown_card']}>
                <div id={styles["floatLeft"]}> Court 1 </div>
                <button id={styles["floatRight"]}> reserve </button>
              </div>
            ) : null}
          </div>
          <div className={styles["center_card"]}>
            <img style={{ width: 250, height: 150 }} src={volleyball} alt="volleyball"/>
            <br/>
            <span className={styles["court_name"]}> Volleyball Courts </span>
            <button id={styles["floatRight"]} onClick={handleOpen}> + </button>
            {open ? (
              <div className = {styles['dropdown_card']}>
                <div id={styles["floatLeft"]}> Court 1 </div>
                <button id={styles["floatRight"]}> reserve </button>
              </div>
            ) : null}
          </div>
          <div className={styles["center_card"]}>
            <img style={{ width: 250, height: 150 }} src={tennis} alt="tennis"/>
            <br/>
            <span className={styles["court_name"]}> Tennis Courts </span>
            <button id={styles["floatRight"]} onClick={handleOpen}> + </button>
            {open ? (
              <div className = {styles['dropdown_card']}>
                <div id={styles["floatLeft"]}> Court 1 </div>
                <button id={styles["floatRight"]}> reserve </button>
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
