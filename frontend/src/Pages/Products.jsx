import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
   
    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        fetchProducts();
    }, []);

    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
               <ProductCard  key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Products
