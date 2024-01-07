import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {

  // bit css
  const outer = {
    // background:"linear-gradient(158deg, #ff9696, #ffff9a, #ffd27ed3)",
    // boxSizing:'border-box'
  };
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='prose w-full rounded-xl p-4 backdrop-blur-lg border-2 border-rose-300 border-solid text-white' style={outer}>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />
            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard