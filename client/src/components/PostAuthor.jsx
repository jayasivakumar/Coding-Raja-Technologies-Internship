// import React, {useEffect,useState} from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'


// const PostAuthor = ({authorID ,createdAt}) => {
//   const [author , setAuthor] = useState({})
//   useEffect(() => {
//     const getAuthor = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${authorID}`)
//         setAuthor(response?.data);
//       } catch (error) {
//         console.log(error)
//       }
//     }

//     getAuthor();
//   }, [])


//   return (
//     <Link to={`/posts/users/sdfsdf`} className='post__author'>
//       <div className="post__author-avatar">
//         <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${author?.avatar}`} alt="Post Author" />
//       </div>
//       <div className="post__author-details">
//         <h5>By: {author?.name}</h5>
//         <small>Just Now</small>
//       </div>
//     </Link>
//   )
// }

// export default PostAuthor

import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar1.jpg'

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/sdfsdf`} className='post__author'>
      <div className="post__author-avatar">
        <img src={Avatar} alt="Post Author" />
      </div>
      <div className="post__author-details">
        <h5>By: Ernest Achiever</h5>
        <small>Just Now</small>
      </div>
    </Link>
  )
}

export default PostAuthor