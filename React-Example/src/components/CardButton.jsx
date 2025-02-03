import React, { useContext } from 'react'
import { CartContext } from './CardContext'

export default function CardButton() {
    const {cartCount} = useContext(CartContext)
  return (
    <div>
        Items in cart: {cartCount}
    </div>
  )
}


