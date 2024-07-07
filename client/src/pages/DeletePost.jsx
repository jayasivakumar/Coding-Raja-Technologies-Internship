// import React,{useContext,useEffect} from 'react'
// import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../context/userContext';

// const DeletePost = () => {
//   const navigate = useNavigate();

//   const {currentUser} = useContext(UserContext)
//   const token = currentUser?.token;

//   // redirect to login page for any use who isn't logged in 

//   useEffect(() => {
//     if(!token) {
//       navigate('/login')
//     }
//   }, [ ])
//   return (
//     <div>DeletePost</div>
//   )
// }

// export default DeletePost

import React from 'react'

const DeletePost = () => {
  return (
    <div>DeletePost</div>
  )
}

export default DeletePost