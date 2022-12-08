import React, {useState, useEffect} from "react";
import { collection, onSnapshot, query, getDocs } from 'firebase/firestore';
import { db } from '../../firestore';
import Header from '../../components/Header/header'
import EditProduct from '../../components/Edit-Product/edit-product'
// import ProductTable from '../../components/product-table/edit-product-table'
import './admin.css';

export default function Admin(){
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
            {/* <Product/> */}

            <div className = "products-container">
                <div className="product-card">
                    {muji_products.map((product) => {
                        console.log(product)
                        return <EditProduct key={product.id} item={product} />
                    })}
                </div>
            </div>
            
        </div>
        
    );
}