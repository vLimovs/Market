import React from 'react'
import { Link } from 'react-router'

const ProductCard = ({ item }) => {
    return (
        <>
            <span className="main__products-item--discount">{Math.floor(item.discountPercentage)}%</span>
            <div className="main__products-item--overview">
                <img src={item.thumbnail} alt="" />
                <div>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <span>Stock: {item.stock} pcs</span>
                </div>
            </div>
            <div className="main__products-item--btn">
                <span>${item.price}</span>
                <div>
                    <Link to={`product/${item.id}`}>More info</Link>
                    <Link>Add to cart</Link>
                </div>
            </div>
        </>
    )
}

export default ProductCard