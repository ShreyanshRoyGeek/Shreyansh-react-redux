import React, { useState,useEffect } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ProductList } from '../productList';


function Product() {

  //Method 1. (To Get All Products Detail)
  // From Redux-Store
  const dispatch = useDispatch();

  const {SavedProducts} = useSelector(state => state.ProductReducer);
  console.log(SavedProducts); // List of all products from redux-centralized store, It can also be mapped directly to homepage



  //Method 2. (To Get All Products Detail)
  // Products Details fetched from API and by Using Hooks for each rendering 
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch('https://aveosoft-react-assignment.herokuapp.com/products');

    setProducts(await response.json());
    
  }

  useEffect(() => {

    getProducts();
    
  }, []) 

  console.log(products); // All Products list by fetching API Details, It can also be mapped




  //Method 3. (To Get All Products Detail)
  //Product Details from stored file (it reduces the loading time.)
  const [productslist, setProductsList] = useState(ProductList); // It is used for mapping into the homepage!


  const filterItem = (categItem) => {
    const updatedItem = products.filter((curProduct) => {
      return curProduct.categoryId === parseInt(categItem)
    })

    setProductsList(updatedItem); 
  }

   

  return (
    <div className="App">
     
      <div className=" d-flex align-items-center justify-content-center" > Product Category 
        <div className= "buttons" >

     
        <button className = "btn btn-info button "  onClick={() => filterItem('0')}> Laptops </button>
        <button className = "btn btn-secondary button"  onClick={() => filterItem('1')}> Mobiles </button>
        <button className = "btn btn-success button"  onClick={() => setProductsList(ProductList)}> All Products </button>

        {/* //DropDown Menu 
        <select className='selector'>
          <option value = 'Laptop' handleButtonClick={() => filterItem('0')}> Laptop  </option>
          <option value = 'Mobile' handleButtonClick={() => filterItem('1')}> Mobile  </option>
        </select> */}

        </div> 
      </div>



      <div className='container-fluid mt-5'>
        <div className='row text-center'>
        {
        productslist.map((product) => {
        return(

         
          <div className="col-10 col-md-4 mt-5"  key={product.id}>
            <div className="card p-2" width= "355">
              <div className="align-items-center">
                <div className="image"> <img src= "https://www.educative.io/v2api/editorpage/6452289848475648/image/5294398307303424" alt = "img" className="rounded" width="155" /> </div>
                  <div className="ml-3   w-100 ">
        
                     <Link to= {`/details/${product.id}`} >      
                      <div className="p-2 mt-2 bg-primary  justify-content-between rounded text-white stats">

                              <div className="d-flex flex-column" >
                                  <span className="name">Name: {product.name}</span>  </div>
                      
                              <div className="d-flex flex-column">
                                  <span className="model">Model: {product.model}</span>  </div>

                              <div className="d-flex flex-column">
                                  <span className="price">Price: ₹{product.price}</span> </div>
                      </div>
                    </Link >  

                   </div>
              </div>
            </div>  

          </div>
          
        )
        })
       }

        </div>

      </div>
      
    </div>

    
  );
}

export default Product;
