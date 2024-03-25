import './AddProduct.css';
import { useState } from 'react';
function AddProduct() {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');

    function titleChangeHandler(event) {
        setTitle(event.target.value);
        console.log(event.target.value);
    }
    function dateChangeHandler(event) {
        setDate(event.target.value);
        console.log(event.target.value);
    }
    function priceChangeHandler(event) {
        setPrice(event.target.value);
    }
    
    return (
        <form className='add-product-section'>
            <div className='product-titile-section'>
                <label htmlFor="input-title">Item Name: </label>
                <input type="text" id='input-title' onChange={titleChangeHandler}/>
            </div>
            <div className='product-date-section'>
                <label htmlFor="input-date">Date: </label>
                <input type="date" id='input-date' onChange={dateChangeHandler}/>
            </div>
            <div className='product-price-section'>
                <label htmlFor="input-price">Price: </label>
                <input type="number" id='input-price' onChange={priceChangeHandler}/>
            </div>
            <div className='submit-section'>
                <button type='submit'>Add Product</button>
            </div>
        </form>
    )
}
export default AddProduct;