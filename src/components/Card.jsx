import './Card.css';
function Card(product) {
    function buttonClickHandler() {
        console.log("button-clicked");
    }
    return (
        <div className='container'>
            <div className='date'>
                <span className="month">{product.item.date.month}</span>
                <span className="year">{product.item.date.year}</span>
                <span className="day">{product.item.date.day}</span>
            </div>
            <div className='product-details'>
                <div className="name">Item Name: {product.item.title}</div>
                <div className="price">Cost: ₹{product.item.amount}</div>
                <button className="btn" onClick={buttonClickHandler}>Add to Cart</button>
            </div>
        </div>
    );
}
export default Card;