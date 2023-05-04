import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaRegStar, FaThumbsUp } from "react-icons/fa";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { toast } from 'react-hot-toast';
import RecipesCard from '../recipesCard/RecipesCard';


const ViewDetails = () => {
    const data = useLoaderData()
    const { picture, name, bio, likes, num_recipes, years_of_experience, recipes } = data;
    
    return (
        <div className="card w-full glass">
            <figure><img className='w-full h-auto rounded-md' src={picture} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <small>{bio}</small>
                <p> Number of recipes : {num_recipes}</p>
                <p>Years of experience: {years_of_experience}</p>
                <li className='flex gap-2'><FaThumbsUp /> {likes}</li>
            </div>

            <div className="lg:grid grid-rows-1 grid-flow-col gap-4">
                {
                    recipes?.map((singledata, index) => <RecipesCard key={index} singledata={singledata} />)
                }
            </div>
        </div>
    );
};

export default ViewDetails;