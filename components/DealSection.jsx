import React from 'react'
import styles from './dealsection.module.css'
import kit from '@/public/kit.png'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Image from 'next/image'


export default function DealSection() {
  return (
    <div className={styles.deal_section}>
    <Image src={kit} alt='kit picture' className={styles.deal_section_image}/>
    <div className={styles.deal_section_textdiv}>
      <h2 className={styles.top_text}>GET VIP ACCESS</h2>
      <h1 className={styles.mid_text}>SINGLES DAY</h1>
      <p className={styles.bottom_text}>Our favourite day of the year is coming up and you don't want to miss this one. Sign up and get:</p>
      
      <div className={styles.feature_textdiv}>
        <IoCheckmarkCircleOutline className={styles.checkmark_icon}/>
        <div>
          <h1 className={styles.feature_text_heading}>Exclusive VIP access</h1>
          <p className={styles.feature_text_para}>Shop your favourites before they sell out</p>
        </div>
      </div>

      <div className={styles.feature_textdiv}>
        <IoCheckmarkCircleOutline className={styles.checkmark_icon}/>
        <div>
          <h1 className={styles.feature_text_heading}>Up to 50% off</h1>
          <p className={styles.feature_text_para}>Enjoy exclusive offers before anyone else</p>
        </div>
      </div>

    </div>
</div>
  )
}
