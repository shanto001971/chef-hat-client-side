import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ViweData from '../ViweData/ViweData';
import { FaBeer, FaSearch } from 'react-icons/fa';
import Banner from '../Banner/Banner';
import ThardBanner from '../Banner/ThardBanner';
import Loading from '../Loading/Loading';

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [chefData, setChefData] = useState([])


    useEffect(() => {
        fetch('https://make-chef-sarver-site-shanto001971.vercel.app/data')
            .then(res => res.json())
            .then(data => setChefData(data))
        setLoading(false)
    }, [])

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className=''>
            <div className=" mb-5  lg:flex gap-5">
                <div className="h-2/6 ">
                    <img className='rounded-md' src="https://media.defense.gov/2018/May/24/2001922405/1280/1280/0/180521-A-AE214-012.JPG" alt="" />
                </div>
                <div className="p-5">
                    <small><span className='text-2xl'>As seen on:</span> Hell’s Kitchen, 24 Hours to Hell and Back, MasterChef
                        <br />  <span className='text-2xl'> Cuisine speciality:</span> Traditional British dishes – especially his beef Wellington
                        <br /> <span className='text-2xl'>Famous quote:</span> “I’ve had a lot of success; I’ve had failures, so I learn from the failures.”
                       <br /> <span className='text-2xl'>Fun fact:</span> The only person to ever make Chef Ramsay cry in the kitchen is his daughter, <br /> Matilda. After her show aired on CBBC in 2014, she was devastated that her burger didn’t look as great as she wanted it to.</small>
                </div>
            </div>
            <div className="lg:grid grid-rows-2 grid-flow-col gap-4">
                {
                    chefData.slice(0, 6).map(chef => <ViweData key={chef.id} chef={chef} />)
                }
            </div>
            <Banner />
            <div className="lg:grid grid-rows-1 grid-flow-col gap-4">
                {

                    chefData.slice(6, 10).map(chef => <ViweData key={chef.id} chef={chef} />)

                }
            </div>
            <div className="">
                <ThardBanner />
            </div>

        </div>
    );
};

export default Home;