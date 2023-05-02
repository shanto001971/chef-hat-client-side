import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const data = useLoaderData()
    const {picture,name,id}=data;
    const {cooking_method,ingredients}=data.recipes;
    // console.log(data)
    return (
        <div className="card w-full glass">
            <figure><img className='w-full h-auto' src={picture} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span className='text-3xl'>Cooking_method:</span> {cooking_method}</p>
                <p className='text-3xl'>Ingredients:</p>
                {
                    ingredients.map(bio=><li>{bio}</li>)
                }
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;