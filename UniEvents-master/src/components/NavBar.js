import React from 'react';
import styles from '../cssModules/NavBar.module.css';
import Logo from './UniEvents_Logo.png';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return(
            <div className={styles.navbar}>
                <img src={Logo} alt = "Logo" height="50" width="150"></img>
                <button className={styles.navbtn}>Sign In</button>
            </div>
        );
    }
}

export default NavBar;