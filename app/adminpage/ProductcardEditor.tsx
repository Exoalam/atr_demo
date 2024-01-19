'use client';
import { items } from '@prisma/client';
import React, { useEffect, useState, ChangeEvent } from 'react'

const ProductcardEditor = () => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    async function sendDataToServer() {
        const response = await fetch('/api/productData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputValue),
        });
        const responseData = await response.json();
        console.log('Server response:', responseData);
    }
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
            <div className='p-2 flex'>{data.map(item => <div key={item.id} className="card w-[15%] h-[10%] bg-base-100 shadow-xl m-2 p-2">
                <figure><img src={item.image} alt="Foods" /></figure>
                <div className="card-body">
                    <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Type name" className="input input-bordered input-warning w-full max-w-xs" />
                    <input type="text" placeholder="Type quantity" className="input input-bordered input-warning w-full max-w-xs" />
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => sendDataToServer() }>Update</button>
                    </div>
                </div>
            </div>)}</div>
        </>
    )
}

export default ProductcardEditor
