import React, { useState } from 'react';

const Productt = () => {
    const [size, setSize] = useState('M');
    const [color, setColor] = useState('blue');

    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <div className="tshirt-container">
            <h1 className="tshirt-title">T-Shirt Product</h1>
            <div className="tshirt-image" style={{ backgroundColor: color }}>
                {/* T-Shirt Image Placeholder */}
                <p>Image Placeholder</p>
            </div>
            <div className="tshirt-options">
                <div className="size-selector">
                    <label htmlFor="size">Size:</label>
                    <select id="size" value={size} onChange={handleSizeChange}>
                        <option value="S">Small</option>
                        <option value="M">Medium</option>
                        <option value="L">Large</option>
                        <option value="XL">Extra Large</option>
                    </select>
                </div>
                <div className="color-selector">
                    <label htmlFor="color">Color:</label>
                    <select id="color" value={color} onChange={handleColorChange}>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="black">Black</option>
                    </select>
                </div>
            </div>
            <button className="add-to-cart">Add to Cart</button>
        </div>
        
    );
};
export default Productt;