import React from 'react';
import { Link } from 'react-router-dom';

const ViweData = ({ chef }) => {
    console.log(chef)
    const { picture, name, num_recipes, years_of_experience,id } = chef
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <li>Number of recipes: {num_recipes}</li>
                <li>Years of experience: {years_of_experience}</li>
                <div className="card-actions justify-end ">
                    <button className="btn btn-primary w-full mt-5"><Link to={`/data/${id}`}>View Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ViweData;