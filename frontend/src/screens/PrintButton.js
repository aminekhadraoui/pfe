import React from 'react';
import { Button } from 'react-bootstrap';
import './index.css'
const PrintButton = () => {

  const handlePrint = () => {
    const content = document.getElementById('order-content'); // replace with your content id
    window.print(content);
  }

  return (

    <Button variant="primary" className="hover-button" onClick={handlePrint}>
        Print Order</Button>
  );
}

export default PrintButton;