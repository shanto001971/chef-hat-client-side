import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { toast } from 'react-hot-toast';


const ViewDetails = () => {
    const data = useLoaderData()
    const { picture, name, id } = data;
    const { cooking_method, ingredients } = data.recipes;
     const handelFavrite =()=>{
        toast("Add to Favorite")
     }
    return (
        <div className="card w-full glass">
            <figure><img className='w-full h-auto rounded-md' src={picture} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span className='text-3xl'>Cooking_method:</span> {cooking_method}</p>
                <p className='text-3xl'>Ingredients:</p>
                {
                    ingredients.map(bio => <li>{bio}</li>)
                }
                
                <div className="card-actions justify-end">
                    <button onClick={handelFavrite} className=" flex bg-slate-400 p-5 rounded-2xl btn"><FaRegStar className='w-8 ml-1' />Add to Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;