import { useEffect, useState, React } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import './edit-form.css';
import { db } from '../../firestore';
import { doc, getDoc, collection, updateDoc } from "firebase/firestore";
import { Link } from 'react-router-dom'; 

export const EditForm = () => {

    const [ product, setProduct ] = useState({})

    const [productNewName, setProductNewName] = useState('')
    const [productNewPrice, setProductNewPrice] = useState('')
    const [productNewImage, setProductNewImage] = useState('')
    const [productNewDescription, setProductNewDescription] = useState('')
    
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
        <div>
            <div className="edit-form-container" id="form-container">
                <form className="form">
                    <label className='edit-form-label'> Title:</label>
                    {/* <input type="text" value={stateValue} onChange={handleChange} /> */}
                    <input 
                        name='title' 
                        type="text" 
                        placeholder="Title" 
                        value={productNewName || product.title} 
                        onChange={(e) => setProductNewName(e.target.value)} 
                        className="input-field"
                    />
                    
                    <label className='edit-form-label'> Price:</label>
                    
                    <input 
                    name='price' 
                    type="text" 
                    placeholder="Price" 
                    value={productNewPrice || product.price} 
                    onChange={(e) => setProductNewPrice(e.target.value)} 
                    className="input-field"
                    />

                    <label className='edit-form-label'> Image Source:</label>

                    <input 
                        name='image' 
                        type="text" 
                        placeholder="Image Source" 
                        value={productNewImage || product.image} 
                        onChange={(e) => setProductNewImage(e.target.value)} 
                        className="input-field"
                    />

                    <label className='edit-form-label'> Description:</label>

                    <input 
                        name='description' 
                        type="text" 
                        placeholder="Description" 
                        value={productNewDescription || product.description} 
                        onChange={(e) => setProductNewDescription(e.target.value)} 
                        className="input-field"
                    />
                </form>

                
            </div>

            <div className="btn-container">
                <button className='btn' > <Link to="/admin" className="back-btn">Back</Link> </button>
                <button className='btn' onClick={updateProduct}> Save</button>
                
            </div>
        </div>
        
        
    );

}
// export default(EditForm);