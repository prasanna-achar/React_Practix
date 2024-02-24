import React from 'react';
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'


export default function PostCard({$id, title, featuredImage}){

    return(
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-500 rounded-xl p-4'>
                <div>
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title} 
                    className='rounded-xl'/>
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    )

}