import { useState, useEffect } from 'react'
import { db } from '../../firestore';
import { collection, onSnapshot, query, getDocs, updateDoc } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';


const ProductTable = ({item}) => {
    return (
      <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Item Image URL</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>
              {/* <button className="btn btn-danger"> */}
              <Link to={`/edit/${item.id}`}>Edit</Link>              
              <br />
            </td>
          </tr>
        </tbody>
      </Table>
      </>
    );
  }
  
  export default ProductTable;
