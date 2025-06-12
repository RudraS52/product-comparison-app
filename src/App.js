import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import products from './data/products';
import './App.css';

function App() {
  const [compareList, setCompareList] = useState([]);

  const handleCompareToggle = (productId) => {
    if (compareList.includes(productId)) {
      setCompareList(compareList.filter(id => id !== productId));
    } else {
      if (compareList.length < 3) {
        setCompareList([...compareList, productId]);
      } else {
        alert("You can only compare up to 3 products.");
      }
    }
  };

  const selectedProducts = products.filter(p => compareList.includes(p.id));

  return (
    <div className="App">
      {/* Header */}
      <header className="app-header">
        <h1>Smartphone Comparison Portal</h1>
        <p>Select up to 3 products to compare &raquo;</p>
      </header>

      {/* Product Grid */}
      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onCompareToggle={handleCompareToggle}
            isSelected={compareList.includes(product.id)}
          />
        ))}
      </div>

    
{/* Compare Section */}
{selectedProducts.length >= 2 && (
  <div className="compare-section">
    <div className="compare-header">
      <h2>Compare Selected Products</h2>
      <button className="clear-all-btn" onClick={() => setCompareList([])}>
        Clear all items
      </button>
    </div>
    <div className="compare-grid">
      {selectedProducts.map(product => (
        <div className="compare-card" key={product.id}>
         <div className="zoom-container">
  <img src={product.image} alt={product.name} />
</div>
 <h3>{product.name}</h3>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Price:</strong> {product.price}</p>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button onClick={() => handleCompareToggle(product.id)}>Remove from Compare</button>
        </div>
      ))}
    </div>
  </div>
)}

      {/* Footer */}
      <footer className="app-footer">
        <p className="Footer-design">&copy; {new Date().getFullYear()} Smartphone Showcase by Rudra Singh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
