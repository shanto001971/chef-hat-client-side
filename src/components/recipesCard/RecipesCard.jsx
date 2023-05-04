import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaRegStar } from 'react-icons/fa';
import ReactStarsRating from 'react-awesome-stars-rating';

const RecipesCard = ({ singledata, data }) => {
    const [favorite, setFavorite] = useState({});
    const [toogle,setToogle]=useState(false);
    const { recipe_name, ingredients, cooking_method } = singledata;
    // console.log(singledata)

    const handelFavroite = (singledata) => {

        const faviroteData = { ...favorite, singledata }
        setFavorite(faviroteData);
        toast('add to Favorite')
        setToogle(!false)

    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{recipe_name}</h2>
                <div className="">
                    {
                        ingredients?.map((indragiton,i) => <li key={i}>{indragiton}</li>)
                    }
                </div>
                <small>{cooking_method}</small>
                <ReactStarsRating className="flex" isEdit={false} value={data.rating} />
                <div className="card-actions justify-end mt-3">
                    <button disabled={toogle} onClick={() => handelFavroite(singledata)} className="btn btn-primary flex gap-2"><FaRegStar />Add to Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default RecipesCard;