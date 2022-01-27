import React, {useEffect}  from 'react';
import './Details.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



function Details() {

  const {id} = useParams();
  // console.log(id);

  const dispatch = useDispatch();

  const {product} = useSelector(state => state.ProductReducer);
  console.log(product);

  useEffect(() => {
      dispatch({type: 'PRODUCT', id})
  },[id])

  
  

  return (
   <div className='detials_info  d-flex align-items-center'>
     <div className='img'>
        <img  src = "https://www.educative.io/v2api/editorpage/6452289848475648/image/5294398307303424" alt = "logo" className='image'/>
     </div>

     <div className='detils'>
        <div className="p-2 mt-2 bg-primary  justify-content-between rounded text-white stats">
            <div className="d-flex flex-column">
                <span className="name">Name: {product.name} </span>  </div>
            <div className="d-flex flex-column">
                <span className="model">Price: ₹{product.price} </span>  </div>
            <div className="d-flex flex-column">
                <span className="price"> Discription: {product.description}  </span> </div>
        </div>
     </div>

   </div>

  );
}

export default Details;
