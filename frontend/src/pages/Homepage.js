import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Product from "../components/Product";
import Search from "../components/Search";
import { listProducts } from "../redux/actions/productActions";
import { useParams } from "react-router-dom";
import Paginate from "../components/Paginate";
import CarouselX from "../components/Carousel";
import Meta from "../components/Meta";


const Homepage = () => {
  const dispatch = useDispatch();

  const { keyword } = useParams();
  const { pageNumber } = useParams();
  console.log(keyword);
  const pNumber = pageNumber || 1;

  const productList = useSelector((state) => state.products);
  const { products, loading, error, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pNumber));
  }, [dispatch, keyword, pNumber]);

  return (
    <>
    <Meta title="Welcome to Deliver | Shop"/>
      {/* {!keyword && <CarouselX/> } */}
      <Search />
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default Homepage;
