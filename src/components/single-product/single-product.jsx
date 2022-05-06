import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductsContext } from '../../context/products-context';
import { isInCart } from '../../helpers';
import { CartContext } from '../../context/cart-context';
import Layout from '../shared/layout';
import './single-product.styles.scss';

 const SingleProduct = () => {
    const { products } = useContext(ProductsContext);
    const { addProduct, cartItems, increase } = useContext(CartContext)
    const navigate = useNavigate();  
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [editFields, setEditFields] = useState(false);
    const token = localStorage.getItem("token");

    useEffect(() => {
        const product = products.find(item => Number(item.id) === Number(id));
      
          // if product does not exist, redirect to shop page
        if (!product) {
            return navigate('/shop');
          }
      
          setProduct(product);
        }, [id, navigate, products, product]);

    if (!product) { return null };

    const { imageUrl, title, price, description, property, value } = product;
    const itemInCart = isInCart(product, cartItems);
  

    return (
        <Layout>
      <div className='single-product-container'>
        {token && <button onClick={() => setEditFields(!editFields)}></button>}
        <div className='product-image'>
          <img src={imageUrl} alt='product' />
          { token && editFields === true && <input type="text"/>}
        </div>
        <div className='product-details'>
          <div className='name-price'>
            <h3>{title}</h3>
            { token && editFields === true && <input type="text"/>}
            <p>$ {price}</p>
            { token && editFields === true && <input type="text"/>}
            <p>{property}</p>
            { token && editFields === true && <input type="text"/>}
            <p>{value.map(v => <p> {v} </p>)}</p>
            { token && editFields === true && <input type="text"/>}
          </div>
          <div className='add-to-cart-btns'>
            {
              !itemInCart &&
              <button 
                className='button is-white nomad-btn' 
                id='btn-white-outline'
                onClick={() => addProduct(product)}
                >
                  ADD TO CART
              </button> 
            }
            {
              itemInCart &&
              <>
              <button 
                className='button is-white nomad-btn' 
                id='btn-white-outline'
                onClick={() => increase(product)}
                >
                
                  ADD MORE
              </button>
              <button className='button is-black nomad-btn' id='btn-white-outline'>
              PROCEED TO CHECKOUT
            </button>
            </>
            }
           
            
            
          </div>
          <div className='product-description'>
            <p>
              { description }
            </p>
            { token && editFields === true && <input type="text"/>}
          </div>
        </div>
      </div>
    </Layout>
    )
}

export default SingleProduct
