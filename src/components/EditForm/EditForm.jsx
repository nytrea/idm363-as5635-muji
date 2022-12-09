import { useEffect, useState, React } from 'react';
import { format_price } from '../utilities/currency'
import { useParams, useHistory } from 'react-router-dom'
import './edit-form.css';
import { db } from '../../firestore';
import { doc, getDoc, collection, updateDoc } from "firebase/firestore";
import { useSelector } from 'react-redux';

export const EditForm = () => {

    const [ product, setProduct ] = useState({})

    const [productNewName, setProductNewName] = useState("")
    const [productNewPrice, setProductNewPrice] = useState("")
    const [productNewImage, setProductNewImage] = useState("")
    const [productNewDescription, setProductNewDescription] = useState("")

    
    async function updateProduct() {
        await updateDoc(doc(db, "products", documentId), 
        {
            name: productNewName || product.title, 
            price: productNewPrice || product.price, 
            image: productNewImage || product.image,
            description: productNewDescription || product.description
        });
}
    const { documentId } = useParams()
    console.log(documentId)
    
    
    async function getProductsByDocumentId() {
        const docRef = doc(db, "products", documentId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setProduct(docSnap.data())

        } else {
        // if doc.data() is undefined 
        console.log("Document does not exist :(");
        }
    }

    useEffect (() => {
        getProductsByDocumentId()
    }, [])

    if (!product) {
        return <h1>Loading...</h1>
    }


    return(
        <div className="edit-form-container" id="form-container">
            <form className="form">
                <label className='edit-form-label'> Title:</label>
                {/* <input type="text" value={stateValue} onChange={handleChange} /> */}
                <input type="text" placeholder="Title" value={productNewName || product.title} onChange={(e) => setProductNewName(e.target.value)} className="input-field"/>
                <label className='edit-form-label'> Price:</label>
                <input type="text" placeholder="Price" value={productNewPrice || product.price} onChange={(e) => setProductNewPrice(e.target.value)} className="input-field"/>
                <label className='edit-form-label'> Image Source:</label>
                <input type="text" placeholder="Image Source" value={productNewImage || product.image} onChange={(e) => setProductNewImage(e.target.value)} className="input-field"/>
                <label className='edit-form-label'> Description:</label>
                <input type="text" placeholder="Description" value={productNewDescription || product.description} onChange={(e) => setProductNewDescription(e.target.value)} className="input-field"/>
                <div className="save-btn-container">
                    <button className='save-btn' onClick={updateProduct}> Save </button>
                </div>
            </form>
        </div>
        
    );

}
// export default(EditForm);