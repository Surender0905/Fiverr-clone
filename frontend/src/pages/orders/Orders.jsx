import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Orders.scss';
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';

const Orders = () => {
  // const { isLoading, error, data, refetch } = useQuery({
  //   queryKey: ['gig'],
  //   queryFn: () =>
  //     newRequest.get(`/orders`).then((res) => {
  //       return res.data;
  //     }),
  // });
  const currentUser = localStorage.getItem('currentUser');
  console.log(currentUser);
  // useEffect(() => {
  //   refetch();
  // }, []);

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              {<th>{currentUser.isSeller ? 'Buyer' : 'Seller'}</th>}
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {/* {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            data &&
            data.map((order, i) => (
              <tr key={order._id}>
                <td>
                  <img className="image" src={order.img} alt="image" />
                </td>
                <td>{order.title}</td>
                <td>{order.price}</td>
                <td>roshan</td>
                <td>
                  <img className="message" src="./img/message.png" alt="" />
                </td>
              </tr>
            ))
          )} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
