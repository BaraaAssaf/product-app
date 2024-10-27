import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductForm from '../../components/productForm';
import { fetchProducts, updateProduct } from '../../services/api';

export default function EditProductPage() {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            console.log(id)
            if (id) {
                const response = await fetchProducts({ id });
                setProduct(response.data[0]);
            }
        };
        fetchProduct();
    }, [id]);

    const handleSubmit = async (productData) => {
        await updateProduct(id, productData);
        router.push('/products');
    };

    return product ? <ProductForm initialData={product} onSubmit={handleSubmit} /> : <p>Loading...</p>;
}
