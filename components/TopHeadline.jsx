import React from 'react'
import styles from './topheadline.module.css'
import countries from '@/data/countries'
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Image from 'next/image';
import { IoIosArrowDown } from "react-icons/io";



export default function TopHeadline() {
  return (
    <>
    <div className={styles.main_container}>

            <div className={styles.headline_container}>
                <p className={styles.mid_text}>FREE DELIVERY ON ORDERS ABOVE 2 PAIRS</p>
            </div>

            {/**Absolute left */}
            <div className={styles.left_container}>
                <div className={styles.left_country_selection_container}>
                    <img src={countries[0].flag} alt='flag' height='30' width='30' className={styles.flag_icon}/>
                    <p className={styles.country_name_text}>{countries[0].country}</p>
                    <IoIosArrowDown className={styles.dropdown_icon}/>
                </div>
            </div>

            {/**Absolute Right */}
            <div className={styles.right_container}>
                <div className={styles.right_status_container}>
                    <FaHeart className={styles.status_icon}/>
                    <FaShoppingCart className={styles.status_icon}/>
                </div>
            </div>
        
    </div>
    </>
  )
}
