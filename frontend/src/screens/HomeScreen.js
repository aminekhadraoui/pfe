import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import { listProducts } from '../actions/productActions';
import CategoryList from '../components/CategoryList';
import Chatbot from './Chatbot';
import ProductListPrice from '../components/ProductListPrice';
import TopRatedProducts from '../components/TopRatedProducts';
import DiamondAnimation from './DiamondAnimation';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
    // Voice greeting
    const greeting = new SpeechSynthesisUtterance('Hello, dear client, welcome ,to Afar, Jewelry');
    greeting.lang = 'en-US';
    speechSynthesis.speak(greeting);
    
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      <DiamondAnimation />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <TopRatedProducts />
          <Row>
            <h1>Latest Products</h1>
            {<CategoryList />}
          </Row>
          <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
        </>
      )}

      <Chatbot />
    </>
  );
};

export default HomeScreen;
