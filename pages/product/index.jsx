import React, { useEffect, useState } from 'react'
import Link from 'next/link'

function Index({result}) {
  
  // const [products,setProducts] = useState([])

  // const getProducts = () => {
  //   fetch("https://localhost:44361/api/Product/productList")
  //   .then(res => res.json()).then(data=> setProducts(data.message))
  // }

  // console.log(products);
  
  // useEffect(() => {
  //   getProducts()
  // },[])

  return (
    <div>
      {
        result.map(product => (
          <>
            <div key={product.id}>
              <h5>{product.title}</h5>
              {/* <Link href={"product/" + product.id}>Ardin oxu</Link> */}
            </div>
          </>
        ))
      }
    </div>
  )
}

export async function getServerSideProps(){
  let data =  await fetch("https://fakestoreapi.com/products")
  let result = await data.json()

  return { props : { result } }
}

export default Index