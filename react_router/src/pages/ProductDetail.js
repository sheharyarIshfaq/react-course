import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

    const params = useParams();

    return (
        <div>
            <h1>Product Details of {params.productId}</h1>
        </div>
    )
}

export default ProductDetail
