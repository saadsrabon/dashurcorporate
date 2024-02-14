/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Navigate, useLocation,  } from 'react-router-dom';
import { AuthContext } from './../context/Contextfile';


const PrivateRoute = ({children}) => {
    const {user ,loader} =useContext(AuthContext);

    const location = useLocation()
  
      if(loader){
        return <div>Loading....</div>
      }
        if(user && user.uid){
            return children;
        }else{
            return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
        }
              
        
   
};

export default PrivateRoute;