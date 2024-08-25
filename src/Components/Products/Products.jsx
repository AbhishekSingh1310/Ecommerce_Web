import React from 'react'
import './product.css';
import ProductNav from './ProductNav';

const Products = () => {
  return (
    <section className="navbar-list-item" id='products'>
        <div className="product-head">
        <h2 className="section_title">Products</h2>
        <span className="section_subtitle">Most Recent Products...</span>
        </div>
        <div className="product-details"><ProductNav/></div>
    </section>
  )
}

export default Products