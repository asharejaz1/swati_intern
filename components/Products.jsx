import React, {useState, useEffect} from 'react'
import styles from './products.module.css'
import Image from 'next/image';
import { RiCloseFill } from "react-icons/ri";



export default function Products() {

    
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(()=>{
    const accessToken = '76f2786ca8fb0ae8a6792d9c63b339aa';


    async function fetchMetafields() {
      try {
        const response = await fetch(
          'https://swaticosmetics-test.myshopify.com/api/2023-10/graphql.json',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'X-Shopify-Storefront-Access-Token': accessToken,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Metafields:', data.metafields);
      } catch (error) {
        console.error('Error fetching metafields:', error.message);
      }
    }

    fetchMetafields();



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

      if (data.errors) {
        console.error('GraphQL errors:', data.errors);
        throw new Error('GraphQL error');
      }

    
      console.log("data = ", data);
      const items = data.data.products.edges.map(edge => edge.node);
      setProducts(items)
    }

    fetchProducts(accessToken, query);

  }, [])


  return (
    <>
    <div className={styles.main_container} >
        <h1 style={{textAlign:'center', paddingTop:'3rem', letterSpacing:'0.5rem', fontWeight:'600'}}>SWATI Lashes</h1>


        <div className={styles.products_container}>

        
        {products.map((product)=>(
            <>
            {product.availableForSale && 
            <div key={product.id} className={styles.product_div} onClick={() => setSelectedProduct(product)}>
              <div className={styles.product_image_div}>
                  <img className={styles.product_image} src={product.images.edges[0].node.originalSrc} alt=''/>
              </div>
              
              <div className={styles.product_text_div}>
                  <p style={{paddingBottom:'0.25rem', letterSpacing:'0.25rem', fontWeight:'600'}}>{product.title.replace(/Lashes/g, '').toUpperCase()}</p>
                  {/* <p style={{lineHeight:'normal', fontSize:'small'}}>{product.description.split('\n')[0].trim()}</p> */}
                  <p style={{fontWeight:'500', fontSize:'large'}}>{product.variants.edges[0].node.priceV2.currencyCode} {product.variants.edges[0].node.priceV2.amount}</p>
              </div>
            </div>
            }
            </>
        ))}

        </div>

        {selectedProduct && (
        <div className={styles.overlay_fullscreen_parent}  >
          <div className={styles.overlay_container}>
                <RiCloseFill className={styles.overlay_closer_icon} onClick={()=>setSelectedProduct(null)}/>
                <div className={styles.overlay_cover_image}>
                  <img src={selectedProduct.images.edges[0].node.originalSrc} height={300} /> {/**Product Cover */}
                </div>

                <div className={styles.overlay_text_middle_div}>
                  <h1 style={{paddingTop:'2rem'}}>{selectedProduct.title}</h1>
                  <p  style={{lineHeight:'1.25rem', padding:'0.5rem'}}>These fluffy and medium rounded lashes with their light criss-cross pattern make your eyes turn up the volume to max.</p>
                  <p style={{fontWeight:'600', fontSize:'x-large'}}>{selectedProduct.variants.edges[0].node.priceV2.currencyCode} {selectedProduct.variants.edges[0].node.priceV2.amount}</p>
                </div>

                <div>
                  <button className={styles.add_to_cart_btn}>Add to Cart</button>
                  <button className={styles.add_to_wish_btn}>Add to Wishlist</button>
                </div>
          </div>

        </div>
        )}
      </div>


        
    </>
  )
}
