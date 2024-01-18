import React from 'react'
import prisma from '@/prisma/client'
const ProductCard = async () => {
    const items = await prisma.items.findMany()
    return (
        <>
            <div className='p-2 flex'>{items.map(item => <div className="card w-[15%] h-[10%] bg-base-100 shadow-xl m-2 p-2">
                <figure><img src={item.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p>Quantity: {item.quantity}</p>
                    <div className="card-actions justify-end"> 
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>)}</div>
        </>
    )
}

export default ProductCard