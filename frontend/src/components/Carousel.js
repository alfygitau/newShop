import React, { useEffect } from "react";
import { Image, Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listTopProducts } from "../redux/actions/productActions";
import Loader from "./Loader";
import Message from "./Message";

const CarouselX = () => {
  const dispatch = useDispatch();

  const topProducts = useSelector((state) => state.topProducts);
  const { loading, error, products } = topProducts;
  console.log(products);

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel
      pause="hover"
      className="bg-light mb-5"
      nextLabel=""
      prevLabel=""
      indicators={false}
      interval={1000}
    >
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className="carousel-caption">
              <h2>
                {product.name} ({product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselX;
