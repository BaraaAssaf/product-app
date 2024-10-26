import React from 'react';
import ProductForm from '../../components/productForm';
import { addProduct } from '../../services/api';
import { useRouter } from 'next/router';

export default function AddProductPage() {
    const router = useRouter();

    const handleSubmit = async (productData) => {
        await addProduct(productData);
        router.push('/products');
    };

    return <ProductForm onSubmit={handleSubmit} />;
}
