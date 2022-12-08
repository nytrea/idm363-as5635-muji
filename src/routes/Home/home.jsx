import React, {useState, useEffect} from "react";
import { collection, onSnapshot, query, getDocs } from 'firebase/firestore';
import { db } from '../../firestore';
import Header from '../../components/Header/header'
import Product from '../../components/Product-Card/product-card'
import './home.css';
import Hero from '../../components/Hero/hero'

// import firebase from "./firebase"

export default function Home(){
    const [muji_products, setProducts] = useState([])
        useEffect(() => {
            const getProducts = () => {
                const productsList = []
                getDocs(collection(db, "products")).then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        const productData = {
                            keyName: doc.id,
                            ...doc.data(),
                        }
                        productsList.push(productData);
                    })
                    setProducts(productsList)
                }).catch((error) => {
                    console.log(error.message)
                })
            }
            getProducts()
        },[]
    )

     //testing asynch function
     useEffect(() => {
        console.log(muji_products);
    }, [muji_products])
    

    return(
        <div>
            <Header/>
            <Hero/>
            {/* <Product/> */}

            <div className = "products-container d-flex justify-content-between row row-cols-1 row-cols-md-2">
                <div className="product-card col-auto mt-2">
                    {muji_products.map((product) => {
                        console.log(product)
                        return <Product key={product.id} item={product} />
                    })}
                </div>
            </div>
            
        </div>
        
    );
}