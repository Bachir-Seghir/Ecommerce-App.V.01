import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { formatDistance } from 'date-fns';
import formatMoney from '../lib/formatMoney';
import OrderItemStyles from './styles/OrderItemStyles';
import Link from 'next/link';
import styled from 'styled-components';
import Error from './ErrorMessage';

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders(orderBy: createdAt_DESC) {
      id
      createdAt
      total
      items {
        id
        title
        description
        image
        price
        quantity
      }
    }
  }
`;
const OrderUl = styled.ul`
  display: grid;
  grid-gap: 4rem;
  /* grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));*/
`;
class Orders extends Component {
  render() {
    return (
      <Query query={USER_ORDERS_QUERY}>
        {({ data: { orders }, error, loading }) => {
          if (loading) return <p>Loading ...</p>;
          if (error) return <Error error={error} />;
          return (
            <div>
              <p>You have : {orders.length} orders</p>
              <OrderUl>
                {orders.map((order) => (
                  <OrderItemStyles key={order.id}>
                    <Link
                      href={{
                        pathname: '/order',
                        query: { id: order.id },
                      }}>
                      <a>
                        <div className='order-meta'>
                          <p>
                            {order.items.reduce((a, b) => a + b.quantity, 0)}{' '}
                            items
                          </p>
                          <p>{order.items.length} Products</p>
                          <p>{formatDistance(order.createdAt, new Date())}</p>
                          <p>{formatMoney(order.total)}</p>
                        </div>
                        <div className='images'>
                          {order.items.map((item) => (
                            <img
                              key={item.id}
                              src={item.image}
                              alt={item.title}
                              width='100'
                            />
                          ))}
                        </div>
                      </a>
                    </Link>
                  </OrderItemStyles>
                ))}
              </OrderUl>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Orders;
