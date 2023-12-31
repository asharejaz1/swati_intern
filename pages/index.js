import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Cover from '@/public/Cover_wide.png'
import SignupBox from '@/components/SignupBox'
import DealSection from '@/components/DealSection'
import Products from '@/components/Products'
import TopHeadline from '@/components/TopHeadline'



export default function Home() {


  

  const vipTexts = Array.from({ length: 20 }, (_, index) => (
    <h1
      key={index}
      className={index % 2 === 0 ? styles.even_vip_text : styles.odd_vip_text}
    >
      VIP ACCESS
    </h1>
  ));



  return (
    <>
      <TopHeadline/>
      <Navbar/>
        {/**Header  */}
        <div className={styles.main_header_container}>
        <div className={styles.header}>
          {vipTexts}
        </div>
        
        </div>

        {/**Hero Section Cover Page */}
        <div className={styles.imagediv}>
          <Image src={Cover} alt='cover' className={styles.coverimage}/>
        </div>

        <SignupBox/>
         <DealSection/>
        <Products/>

        
    </>
  )
}
