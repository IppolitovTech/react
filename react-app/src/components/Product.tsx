import React, { useState } from "react"; //before 18 version
import { IProduct } from "../models";

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {

    const [details, setDetails] = useState(false)
    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
    const btnClasses = ['py-2 px-4 border', btnBgClassName]

    console.log(product);
    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} className="w-1/6" alt={product.title} />
            <p>Name: {product.title}</p>
            Price: <span className="font-bold">{product.price}</span><br />
            <button className={btnClasses.join(' ')} onClick={() => setDetails(prev => !prev)}>{details ? 'Hide' : 'Show'}</button>
            {details && <p>{product.description}</p>}
            <p>Rate: <span style={{ fontWeight: 'bold' }}> {product.rating?.rate}</span></p>
            <div>

            </div>
        </div>
    );
}