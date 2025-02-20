import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-black text-white flex items-center gap-5 p-4'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/product'>Products</Link>
    </div>
  )
}
