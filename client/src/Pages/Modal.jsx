import React, { useState } from 'react';
import './Modal.css'; // Import your custom CSS file

const ProductModal = ({ showModal, handleClose }) => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleProductSubmit = () => {
    // Add logic to handle the submission of product details and image
    // For example, you can send the data to a server or perform other actions.
    console.log('Product Name:', productName);
    console.log('Description:', description);
    console.log('Price:', price);
    console.log('Image:', image);

    // Clear the form fields
    setProductName('');
    setDescription('');
    setPrice('');
    setImage(null);

    // Close the modal
    handleClose();
  };

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-overlay" onClick={handleClose}></div>
      <div className="modal-content">
        <span className="close-btn" onClick={handleClose}>&times;</span>
        <h2>Add Product</h2>
        <form>
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="3"
            placeholder="Enter product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            placeholder="Enter product price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button type="button" onClick={handleProductSubmit}>
            Save Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
