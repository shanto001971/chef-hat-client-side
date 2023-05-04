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
            <div style={{ backgroundImage: `url("https://pikwizard.com/pw/small/ffc0672f15697ae9b994f7ee2b3ee9eb.jpg")` }} className="bg-cover h-96 bg-no-repeat mb-5 text-center">
                <div className="">
                    <input type="text" placeholder="Type here" className="input w-full max-w-xs my-48" />
                    <button className=' p-4'><FaSearch className='w-10 text-white' /></button>

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