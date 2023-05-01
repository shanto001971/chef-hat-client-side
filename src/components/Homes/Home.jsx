import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ViweData from '../ViweData/ViweData';

const Home = () => {
    const [chefData, setChefData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setChefData(data))
    }, [])


    return (
        <div className=''>
            <div className="">
                
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-4">
            {
                chefData.slice(0,6).map(chef=><ViweData key={chef.id} chef={chef} />)
            }
            </div>
        </div>
    );
};

export default Home;