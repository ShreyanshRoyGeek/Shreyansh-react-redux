import React from 'react';
import Product from './Components/Product';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Details from './Components/Details';
import { Provider } from 'react-redux';
import store from './redux/store/index';
//import { useDispatch, useSelector } from 'react-redux';
//import { auth, provider } from './firebase';
//import { setActiveUser, setUserLogOutState, selectUserName, selectUserEmail} from './redux/store/redux-login/userSlice'



function App() {

  //    --->  Login with popup and Logout Options using Firebase --->

  // const dispatch = useDispatch();

  // const userName = useSelector(selectUserName);
  // const userEmail = useSelector(selectUserEmail);


  // const handleSignOut = () => {

  //   auth.signOut().then(() => {
  //     dispatch(setUserLogOutState());
  //   }).catch((err) => err.message())

  // }


  // const handleSignIn = () => {
  //   auth.signInWithPopup(provider).then((result) => {
  //     dispatch(setActiveUser({
  //       userName: result.user.displayName,
  //       userEmail: result.user.email
  //     }))
  //   }) 

  // }



  return (

    <div className='App'>

      {/* {
        !userName ? (
            <button onClick={handleSignOut}> SignOut </button>
        ) : */}

         
         <Router>
           <Provider store = {store}>
            <Switch>

              <Route exact path= "/"> 

                {/* <button onClick={handleSignIn}> SignIn </button> */}

                <Product/>

               </Route>

               <Route exact path= "/details/:id"> 
                   <Details  />
               </Route>

            </Switch>
           </Provider>
         </Router>
           
        

    </div>
  );
  
}

export default App;
