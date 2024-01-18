'use client';
import { items } from '@prisma/client';
import React, { useEffect, useState } from 'react'

const ProductcardEditor = () => {
    const [data, setData] = useState<items[]>([]);

    useEffect(() => {
        fetch('/api/productData')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <>        
        <div>{data.map(item => <div key={item.id} className='m-2 p-3 w-[25%] bg-slate-300 flex-col rounded-xl'>
            <img className='h-[50%] w-[50%] m-auto' src={item.image}/>
            <br></br>
            <div className='text-right mr-10 text-black'><b>Product Name: </b><input className='placeholder-black bg-white' type='text' placeholder={item.name}></input></div>
            <br></br>
            <div className='text-right mr-10 text-black'><b>Quantity: </b><input className='placeholder-black bg-white' type='text' placeholder={String(item.quantity)}></input></div>
            </div>)}</div>
            <button onClick={()=> console.log("hello")}>Update</button>
        </>
     )
}

export default ProductcardEditor