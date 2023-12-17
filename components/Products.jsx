import React, {useState, useEffect} from 'react'
import styles from './products.module.css'


export default function Products() {

    
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


  return (
    <>
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
    </>
  )
}
