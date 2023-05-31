
import '../App.css';

function ProductList({ product,addToCart }) {
    const changehandle=e=>
    {
        alert("succesfully added to cart")
    }
    return (
        <div className='flex'>
            {
                product.map((productItem, productIndex) => {
                    return (
                        
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className='container'>
                                <div className='row'>
                                    <div className='container'>
                                <div  style={{ width: '100%' }} className='menu-item-card p-3 mb-4 mt-3 shadow'>
                                <div className="text-center">
                                    <img src={productItem.url} width="300px" className="menu-card-image w-100"/>
        
                                    <p className="menu-card-title" >{productItem.name} </p>
                                    <p className="menu-item-link">   category {productItem.category} </p>
                                   
                                    <p className='price-flower'> Rs. {productItem.price} /-</p>
                                    <button className='btn cart-button'
                                        onClick={()=>{ addToCart(productItem);
                                            alert("Item successfully added")
                                        }}
                                    >Add To Cart</button>
                                </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductList