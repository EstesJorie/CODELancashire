import React from 'react'
import CartProvider from '../components/CardContext'
import CardButton from '../components/CardButton'
import ProductList from '../components/ProductList'

export default function Products() {
  return (
        <CartProvider>
            <CardButton />
            <ProductList />
        </CartProvider>
  )
}
