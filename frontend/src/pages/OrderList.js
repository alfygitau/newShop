import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listAllOrders } from "../redux/actions/orderActions";

const OrderList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderList = useSelector((state) => state.allOrders);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.login);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listAllOrders());
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, userInfo]);

  return (
    <>
      <h1>Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>$&nbsp;{order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  <Link to={`/order/${order._id}`}>
                    <Button variant="light" className="btn-sm">
                      Details
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default OrderList;
