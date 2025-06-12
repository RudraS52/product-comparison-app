import React from 'react';

const ProductCard = ({ product, onCompareToggle, isSelected }) => {
  return (
    <div className="product-card">
      <div className="zoom-container">
  <img src={product.image} alt={product.name} />
</div>

<h3>{product.name}</h3>
      <p>{product.brand}</p>
      <p>{product.price}</p>
      <ul>
        {product.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
    <button
  className={isSelected ? "selected" : ""}
  onClick={() => onCompareToggle(product.id)}
>
  {isSelected ? "Added for Compare" : "Add to Compare"}
</button>

 </div>
  );
};

export default ProductCard;
