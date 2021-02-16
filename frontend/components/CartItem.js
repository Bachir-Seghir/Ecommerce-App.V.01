import React from 'react';
import formatMoney from '../lib/formatMoney';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RemoveFromCart from './RemoveFromCart';

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid ${(props) => props.theme.lightgrey};
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 10px;
  }
  h3,
  p {
    margin: 0;
  }
`;

const CartItem = ({ cartItem }) => {
  const { id, item, quantity } = cartItem;
  if (cartItem.item !== null) {
    const { title, price, image } = item;
    return (
      <CartItemStyles>
        <img width='50' src={image} alt={title} />
        <div className='cart-tem-details'>
          <h3>{title}</h3>
          <p>
            {formatMoney(price * quantity)}
            {' -- '}
            <em>
              {quantity} &times; {formatMoney(price)} each
            </em>
          </p>
        </div>
        <RemoveFromCart id={id} />
      </CartItemStyles>
    );
  } else {
    return (
      <CartItemStyles>
        <p>This Item has been removed</p>
        <RemoveFromCart id={id} />
      </CartItemStyles>
    );
  }
};

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
};

export default CartItem;
