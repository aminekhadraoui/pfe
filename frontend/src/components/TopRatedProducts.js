import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from './Product'; // Import the Product component

const TopRatedProducts = () => {
  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  const sortedProducts = products
    .filter((product) => product.numReviews > 0)
    .slice()
    .sort((a, b) => b.rating - a.rating);

  return (
    <div style={{ padding: '20px' }}>
      <h3 style={{ color: '#333', marginBottom: '20px' }}>Top Rated Products</h3>
      <hr />
      <Row>
        {sortedProducts.map((product) => (
          <Col key={product._id} md={4} className="mb-4">
            {/* Use the Product component to render each product */}
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TopRatedProducts;
