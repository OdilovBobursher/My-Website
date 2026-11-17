import React from 'react'
import { NavLink } from 'react-router-dom'
import './Productitem.css'


function Productitem({ title, price, image, id }) {
  return (
    <NavLink to={`/signlePage/${id}`}>
        <div className='product'>
            <div className='product_img'>
               <img src={image} alt="" />
               { /* <button className='cart'> <IoCartOutline /> Add To Cart </button> */}
            </div>
            <div className='product_title'> 
              <h3>{title}</h3>
              <p>
                <span>{price}</span>
                <span>{price}</span>
              </p>
            </div>
        </div>
    </NavLink>
  );
}

export default Productitem;