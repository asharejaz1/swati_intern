import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import styles from './navbar.module.css'
import { useState } from 'react';

export default function Navbar() {

  const [sidebarOpened, setSidebarOpened] = useState(false);

  return (
    <div className={styles.navbar}>
        <GiHamburgerMenu className={styles.navicon} id={sidebarOpened? styles.hidden_nav_icon: ''} onClick={()=>setSidebarOpened(true)}/>
        <IoIosClose className={styles.close_nav_icon} id={sidebarOpened? '': styles.hidden_nav_icon} onClick={()=>setSidebarOpened(false)}/>
        
        <div className={styles.midcontent}>
            <h5 className={styles.midcontent_text}>COLOURED LENSES</h5>
            <h5 className={styles.midcontent_text}>MAKE-UP</h5>
            <h1 className={styles.midcontent_text} id={styles.mainheading}>SWATI</h1>
            <h5 className={styles.midcontent_text}>BUNDLES & SETS</h5>
            <h5 className={styles.midcontent_text} id={styles.last_text}>REVIEWS</h5>
        </div>
    </div>
  )
}
