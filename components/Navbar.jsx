import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
        <GiHamburgerMenu className={styles.navicon}/>
        
        <div className={styles.midcontent}>
            <h5>COLOURED LENSES</h5>
            <h5>MAKE-UP</h5>
            <h1>SWATI.</h1>
            <h5>BUNDLES & SETS</h5>
            <h5>REVIEWS</h5>
        </div>
    </div>
  )
}
