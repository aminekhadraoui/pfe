import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { SlDiamond } from 'react-icons/sl';
import Product from './Product';
import './style.css';
import { Form, Row, Col } from 'react-bootstrap';
const CategoryList = () => {
  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Create a Set object to hold the unique categories
  const uniqueCategories = new Set(products.map((product) => product.category));

  const handlePriceFilter = () => {
    // Filter the products based on the price range
    const filteredProducts = products.filter((product) => {
      if (minPrice && maxPrice) {
        return product.price >= minPrice && product.price <= maxPrice;
      } else if (minPrice) {
        return product.price >= minPrice;
      } else if (maxPrice) {
        return product.price <= maxPrice;
      }
      return true;
    });

    // Return the filtered products
    return filteredProducts;
  };

  return (
    <div style={{padding: '20px' }}>
      <h3 style={{ color: '#333', marginBottom: '20px' }}>Shop By Category</h3>
      <hr />
      <Nav className="mb-4">
        {/* Iterate over the unique categories and render a link for each one */}
        {[...uniqueCategories].map((category) => (
          <Nav.Item key={category}>
            <LinkContainer to={`/search/${category}`}>
              <Nav.Link className="color" style={{ color: '#333', fontWeight: 'bold' }}>
                <SlDiamond /> {category}
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
        ))}
      </Nav>

      <div className="mb-4">
        <h5>Filter by Price</h5>
        <div className="d-flex align-items-center">
        <Form>
  <Form.Group as={Row} controlId="formPriceRange">
    <Form.Label column sm={2} htmlFor="minPrice">
      Min Price:
    </Form.Label>
    <Col sm={4}>
      <Form.Control
        type="number"
        id="minPrice"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        placeholder="Min Price"
      />
    </Col>
    <Form.Label column sm={2} htmlFor="maxPrice">
      Max Price:
    </Form.Label>
    <Col sm={4}>
      <Form.Control
        type="number"
        id="maxPrice"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        placeholder="Max Price"
      />
    </Col>
  </Form.Group>
</Form>
      </div>
          </div>
      {/* Render the filtered products */}
      <div className="row">
        {handlePriceFilter().map((product) => (
          <div key={product._id} className="col-md-4 mb-4">
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
