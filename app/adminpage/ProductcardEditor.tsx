'use client';
import { items } from '@prisma/client';
import React, { useEffect, useState } from 'react'

const ProductcardEditor = () => {
    const [data, setData] = useState<items[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/productData');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <div className='p-2 flex'>{data.map(item => <div className="card w-[15%] h-[10%] bg-base-100 shadow-xl m-2 p-2">
                <figure><img src={item.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <input type="text" placeholder="Type name" className="input input-bordered input-warning w-full max-w-xs" />
                    <input type="text" placeholder="Type quantity" className="input input-bordered input-warning w-full max-w-xs" />
                    <div className="card-actions justify-end"> 
                        <button className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>)}</div>
        </>
     )
}

export default ProductcardEditor