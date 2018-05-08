import React from 'react'
import { Link } from 'react-router'
import Table from '../common/Table';


const ProductTable = ({products, deleteProduct}) => (
    <Table
        headers={['Product id', 'Product name']}
        deleteAction={deleteProduct}
        rows={products.map(product => ({
            id: product.id,
            columns: [
                <Link to={`/products/${product.id}`}>
                    {product.id}
                </Link>,
                <Link to={`/products/${product.id}`}>
                    {product.name}
                </Link>
            ]
        }))}
    />
);
export default ProductTable;
