import React from 'react'
import styles from './signupbox.module.css'


export default function SignupBox() {
  return (
    <div className={styles.main}>
        
        <h1 className={styles.heading_text}>VIP ACCESS SINGLES DAY</h1>
        <p className={styles.tagline_text}>Sign up and get early access to our Singles day offers</p>

        <div className={styles.inputdiv}>
            <input type='text' placeholder='Enter your email address to apply...' className={styles.email_input}/>
            <button className={styles.applybtn}>APPLY NOW</button>
        </div>
      
    </div>
  )
}
