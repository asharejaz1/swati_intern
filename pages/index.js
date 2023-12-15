import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Cover from '@/public/Cover_wide.png'
import SignupBox from '@/components/SignupBox'
import kit from '@/public/kit.png'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { useState, useEffect } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const accessToken = '76f2786ca8fb0ae8a6792d9c63b339aa';

    const query = `
    query getProductsByType {
      products(first: 10, query: "product_type:False Eyelashes") {
        edges {
          node {
            id
            title
            description
            descriptionHtml
            availableForSale
            handle
            productType
            variants(first: 5) {
              edges {
                node {
                  priceV2 {
                    amount
                    currencyCode
                  }
                }
              }
            }
            images(first: 5) {
              edges {
                node {
                  originalSrc
                }
              }
            }
          }
        }
      }
    }
    
    `;

    async function fetchProducts(accessToken, query) {
      const response = await fetch(
        'https://swaticosmetics-test.myshopify.com/api/2023-10/graphql.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': accessToken,
          },
          body: JSON.stringify({ query }),
        }
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
      const items = data.data.products.edges.map(edge => edge.node);
      setProducts(items)
    }

    fetchProducts(accessToken, query);

  }, [])

  
  console.log(products)



  return (
    <>
      <Navbar/>
      <div>
        <div className={styles.header}>
          <h1 className={styles.odd_vip_text}>VIP ACCESS</h1>
          <h1 className={styles.even_vip_text}>VIP ACCESS</h1>
          <h1 className={styles.odd_vip_text}>VIP ACCESS</h1>
          <h1 className={styles.even_vip_text}>VIP ACCESS</h1>
          <h1 className={styles.odd_vip_text}>VIP ACCESS</h1>
          <h1 className={styles.even_vip_text}>VIP ACCESS</h1>
          <h1 className={styles.odd_vip_text}>VIP ACCESS</h1>
          <h1 className={styles.even_vip_text}>VIP ACCESS</h1>
          <h1 className={styles.odd_vip_text}>VIP ACCESS</h1>
          <h1 className={styles.even_vip_text}>VIP ACCESS</h1>
        </div>

        <div className={styles.imagediv}>
        <Image src={Cover} alt='cover' className={styles.coverimage}/>
        </div>
        <SignupBox/>

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


        <h1 style={{textAlign:'center', paddingTop:'3rem'}}>SWATI Lashes</h1>


        <div className={styles.products_container}>

          
          {products.map((product)=>(
            <>
            {product.availableForSale && 
             <div key={product.id} className={styles.product_div}>
              <div className={styles.product_image_div}>
                <img className={styles.product_image} src={product.images.edges[0].node.originalSrc} alt=''/>
              </div>
             
              <div className={styles.product_text_div}>
                <p style={{paddingBottom:'0.5rem'}}>{product.title.replace(/Lashes/g, '').toUpperCase()}</p>
                {/* <p style={{lineHeight:'normal', fontSize:'small'}}>{product.description.split('\n')[0].trim()}</p> */}
                <p style={{fontWeight:'600'}}>{product.variants.edges[0].node.priceV2.currencyCode} {product.variants.edges[0].node.priceV2.amount}</p>
              </div>
             </div>
            }
            </>
          ))}
        </div>
      </div>
    </>
  )
}
