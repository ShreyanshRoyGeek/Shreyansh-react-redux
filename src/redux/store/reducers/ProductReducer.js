const initState = {
    SavedProducts: [
{
"id": 0,
"name": "Lenovo L50",
"model": "model1",
"categoryId": 0,
"price": 35000,
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget aliquam lorem. Mauris tempor sagittis est, at interdum odio auctor suscipit. Morbi ac lectus eget purus scelerisque congue et nec velit. Aliquam quis commodo mi. Phasellus facilisis, diam pulvinar varius viverra, tortor augue tempor magna, in suscipit magna urna nec libero. Morbi quis tempus magna. Proin in dolor velit. Fusce tempor massa purus, et commodo mauris tempor eget."
},
{
"id": 1,
"name": "MSI 120",
"model": "model1",
"categoryId": 0,
"price": 65000,
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget aliquam lorem. Mauris tempor sagittis est, at interdum odio auctor suscipit. Morbi ac lectus eget purus scelerisque congue et nec velit. Aliquam quis commodo mi. Phasellus facilisis, diam pulvinar varius viverra, tortor augue tempor magna, in suscipit magna urna nec libero. Morbi quis tempus magna. Proin in dolor velit. Fusce tempor massa purus, et commodo mauris tempor eget."
},
{
"id": 2,
"name": "Lenovo L52",
"model": "model88",
"categoryId": 0,
"price": 120000,
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget aliquam lorem. Mauris tempor sagittis est, at interdum odio auctor suscipit. Morbi ac lectus eget purus scelerisque congue et nec velit. Aliquam quis commodo mi. Phasellus facilisis, diam pulvinar varius viverra, tortor augue tempor magna, in suscipit magna urna nec libero. Morbi quis tempus magna. Proin in dolor velit. Fusce tempor massa purus, et commodo mauris tempor eget."
},
{
"id": 3,
"name": "HP E120",
"model": "model 230",
"categoryId": 0,
"price": 80500,
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget aliquam lorem. Mauris tempor sagittis est, at interdum odio auctor suscipit. Morbi ac lectus eget purus scelerisque congue et nec velit. Aliquam quis commodo mi. Phasellus facilisis, diam pulvinar varius viverra, tortor augue tempor magna, in suscipit magna urna nec libero. Morbi quis tempus magna. Proin in dolor velit. Fusce tempor massa purus, et commodo mauris tempor eget."
},
{
"id": 5,
"name": "Vivo150",
"model": "M Mobile 1",
"categoryId": 1,
"price": 15000,
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget aliquam lorem. Mauris tempor sagittis est, at interdum odio auctor suscipit. Morbi ac lectus eget purus scelerisque congue et nec velit. Aliquam quis commodo mi. Phasellus facilisis, diam pulvinar varius viverra, tortor augue tempor magna, in suscipit magna urna nec libero. Morbi quis tempus magna. Proin in dolor velit. Fusce tempor massa purus, et commodo mauris tempor eget."
},
{
"id": 6,
"name": "Pixel 4a",
"model": "Test Model",
"categoryId": 1,
"price": 65000,
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget aliquam lorem. Mauris tempor sagittis est, at interdum odio auctor suscipit. Morbi ac lectus eget purus scelerisque congue et nec velit. Aliquam quis commodo mi. Phasellus facilisis, diam pulvinar varius viverra, tortor augue tempor magna, in suscipit magna urna nec libero. Morbi quis tempus magna. Proin in dolor velit. Fusce tempor massa purus, et commodo mauris tempor eget."
},
{
"id": 7,
"name": "Lenovo L50",
"model": "model1",
"categoryId": 0,
"price": 35000,
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget aliquam lorem. Mauris tempor sagittis est, at interdum odio auctor suscipit. Morbi ac lectus eget purus scelerisque congue et nec velit. Aliquam quis commodo mi. Phasellus facilisis, diam pulvinar varius viverra, tortor augue tempor magna, in suscipit magna urna nec libero. Morbi quis tempus magna. Proin in dolor velit. Fusce tempor massa purus, et commodo mauris tempor eget."
},
{
"id": 8,
"name": "MI",
"model": "Redmi 122",
"categoryId": 1,
"price": 10000,
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget aliquam lorem. Mauris tempor sagittis est, at interdum odio auctor suscipit. Morbi ac lectus eget purus scelerisque congue et nec velit. Aliquam quis commodo mi. Phasellus facilisis, diam pulvinar varius viverra, tortor augue tempor magna, in suscipit magna urna nec libero. Morbi quis tempus magna. Proin in dolor velit. Fusce tempor massa purus, et commodo mauris tempor eget."
},
{
"id": 9,
"name": "IPhone",
"model": "XE",
"categoryId": 1,
"price": 135000,
"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget aliquam lorem. Mauris tempor sagittis est, at interdum odio auctor suscipit. Morbi ac lectus eget purus scelerisque congue et nec velit. Aliquam quis commodo mi. Phasellus facilisis, diam pulvinar varius viverra, tortor augue tempor magna, in suscipit magna urna nec libero. Morbi quis tempus magna. Proin in dolor velit. Fusce tempor massa purus, et commodo mauris tempor eget."
}

], 

    
    filteredProducts: [],

    product: {},

}

  

const ProductReducer = ( state = initState, action ) =>  {
  
    switch(action.type){
        case 'PRODUCT':
            return {...state, product: state.SavedProducts.find(product => product.id === parseInt(action.id))}

        
    
        case 'FILTER_PRODUCTS_WITH_CATEGORY_ID':
            return {
            ...state,
            filteredProducts: state.SavedProducts.find(products => products.categoryId === (action.categoryId))
            }
       

        default:
            return state;
    }


}

export default ProductReducer;
