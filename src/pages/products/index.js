import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchProducts, deleteProduct } from '../../services/api';
import ProductList from '../../components/productList';

export default function ProductPage() {
    const router = useRouter();

    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({});

    const getProducts = async () => {
        const response = await fetchProducts(filters);
        setProducts(response.data);
    };

    useEffect(() => {
        getProducts();
    }, [filters]);

    const handleDelete = async (id) => {
        await deleteProduct(id);
        getProducts();
    };

    const handleEdit = (id) => {
        router.push(`/products/${id}`);
    };
    return (
        <ProductList products={products} onDelete={handleDelete} setFilters={setFilters} handleEdit={handleEdit}/>
    );
}
