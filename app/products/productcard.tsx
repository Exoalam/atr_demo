import React from 'react'
import prisma from '@/prisma/client'
const ProductCard = async () => {
    const items = await prisma.items.findMany()
    return (
        <>        
        <div>{items.map(item => <div className='m-2 p-3 w-[25%] bg-slate-300 flex-col rounded-xl'>
            <img className='h-[50%] w-[50%] m-auto' src={item.image}/>
            <br></br>
            <b>Product Name: {item.name}</b>
            <br></br>
            <b>Quantity: {item.quantity}</b>
            </div>)}</div>
        </>
     )
}

export default ProductCard