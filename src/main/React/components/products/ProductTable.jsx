import React from 'react'
import { Link } from 'react-router'
import Table from '../common/Table';


export default ProductTable = ({products, deleteProduct}) => (
    <Table
        headers={['Product id', 'Product name']}
        deleteFunction={deleteProduct}
        rows={products.map(product => [
                <Link to={`/products/${product.id}`}>
                    {product.id}
                </Link>,
                <Link to={`/products/${product.id}`}>
                    {product.name}
                </Link>
            ]
        )}
    />
);
