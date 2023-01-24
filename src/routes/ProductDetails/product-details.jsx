import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import  {Card}  from 'react-bootstrap';
import { format_price } from '../../components/utilities/currency';
import { doc, getDoc, collection, updateDoc } from "firebase/firestore";
import { db } from '../../firestore';


import Header from '../../components/Header/header'


const ProductPage = (products)=>{
    
    const { documentId } = useParams();
    const [mujiProduct, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const docRef = doc(db, "products", documentId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setProduct(docSnap.data());
                } else {
                    setError("No such document!");
                }
            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        };
        getProduct();
    }, [documentId]);

    const handleAddToCart = (product) => {
        addItemToCart(product)
      
      }
      const addItemToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || {}
        cart.cartItems = cart.cartItems || []
        const itemInCart = cart.cartItems.find((cartItem) => cartItem.id === product.id)
        if (itemInCart) {
          itemInCart.quantity += 1
        } else {
          
          cart.cartItems.push({ id:product.id, name:product.name, price : product.price, image:product.image_path, quantity: 1 })
        }
        cart["totalValue"] = cart.cartItems.reduce((acc, product) => acc + product.price * product.quantity, 0)

        localStorage.setItem('cart', JSON.stringify(cart))
        console.log("updatedCart", cart, format_price(cart.totalValue))
      }
    return (
        <div className="pageBody">
            <div className="products-container">
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {mujiProduct && (
                    <Card>
                        <Card.Img variant="top" className="productImage" src={mujiProduct.image} />
                        <Card.Body>
                            <Card.Title className="productTitle">{mujiProduct.name}</Card.Title>
                            <Card.Text className="itemPrice">
                                {format_price(mujiProduct.price)}
                            </Card.Text>
                            {/* <Link to={`/`}>
                                <Button className="backButton" variant="primary">Go Back</Button>
                            </Link> */}
                            <button className="center cart-button" onClick={() => handleAddToCart(mujiProduct)} variant="primary">Add to Cart</button>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </div>
    )
}

export default ProductPage;
