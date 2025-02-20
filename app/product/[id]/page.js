import Image from 'next/image'
import React from 'react'

async function fetchProduct(id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = response.json()
    return product
}

export async function generateMetadata({params}) {
    const id = (await params).id
    const product = await fetchProduct(id)

    return {
        title: `Store | ${product.title}`,
        description: product.description
    }
}

export default async function page({params}) {
    const id = (await params).id
    const product = await fetchProduct(id)

  return (
    <div className='p-20 grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='relative min-h-150 w-100'>
            <Image src={product.image} alt={product.title} 
            fill={true} objectFit='cover' />
        </div>
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
                <h1 className='font-semibold text-xl'>{product.title}</h1>
                <span>£{product.price}</span>
                <span className='w-fit h-fit rounded-full bg-gray-600 p-2 text-white'>{product.category}</span>
            </div>
            <p>{product.description}</p>
            <button className='bg-black text-white py-2 px-4 rounded-md'>Add to Cart</button>
        </div>
    </div>
  )
}
