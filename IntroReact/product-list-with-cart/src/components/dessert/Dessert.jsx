function Dessert({imgUrl, foodName, foodDescription, foodPrice}){
    return (
        <div>
            {/* food picture */}
            <div>
                <img src={imgUrl} alt="" />
            </div>

            {/* add to cart button */}
            <div>
                <button type="button" className="add-to-cart">Add to Cart</button>
            </div>

            {/* food, description and price */}
            <div>
                <h3>{foodName}</h3>
                <p>{foodDescription}</p>
                <h2>${foodPrice}</h2>
            </div>
        </div>
    )
}

export default Dessert;