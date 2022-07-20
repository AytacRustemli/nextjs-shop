import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './components/product/product'

export default function Home() {
  return (
    <div>
      <Product/>
    </div>
  )
}
