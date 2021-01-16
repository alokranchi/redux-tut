import React from 'react'

function Home() {
    return (
        <div>
            <div className="add-to-cart " >
                <img src="https://media.istockphoto.com/photos/add-to-cart-card-in-shopping-cart-3d-rendering-picture-id1132076058" />
                </div>
            <h1> Home component1</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper-item">
                    <img src="https://www.myitshop.com.au/wp-content/uploads/iphone-x-transparent.png" />
                </div>

                <div className="text-warpper-item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                       Price : $1000.00
                    </span>
                </div>
                <div className="btn-warpper button">
                    <button>Add to Cart</button>

                </div>
            </div>
        </div>

    )

}
export default Home