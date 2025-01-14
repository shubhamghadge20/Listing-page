import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <Card
      className="product-card shadow-lg"
      style={{
        width: '100%',
        maxWidth: '18rem',
        borderRadius: '12px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      {/* Image Section */}
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        className="product-card-img"
        style={{
          objectFit: 'cover',
          height: '220px',
          borderRadius: '12px 12px 0 0',
          transition: 'transform 0.3s ease',
        }}
      />

      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          {product.name}
        </Card.Title>
        <Card.Text style={{ fontSize: '1.1rem', color: '#007bff' }}>
          ₹{product.price}
        </Card.Text>

        {/* Star Rating Section */}
        <div className="d-flex align-items-center">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              color={index < product.rating ? '#FFD700' : '#e4e5e9'}
              style={{
                transition: 'color 0.2s ease',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>

        {/* Add to Cart Button */}
        <Button
          variant="primary"
          className="mt-3 w-100"
          style={{
            borderRadius: '8px',
            fontSize: '1rem',
            padding: '12px 0',
            transition: 'background-color 0.3s ease',
          }}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
