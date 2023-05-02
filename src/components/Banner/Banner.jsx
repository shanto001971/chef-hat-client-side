import React from 'react';

const Banner = () => {
    return (
        <div className='m-5 lg:flex'>
            <div className="">
                <img className='rounded-xl' src={'https://pyxis.nymag.com/v1/imgs/c4f/ef4/3d1754482ad423578cc60f31329abb4487-13-daniel-rose.2x.h473.w710.jpg'} alt="" />
            </div>
            <div className="p-5">
                <h1 className='text-4xl'>Most Famous Chefs In 2023</h1>
                <small>When you think about world-renowned chefs, what’s the first name that comes to mind? Is it Gordon Ramsay? Jamie Oliver? Wolfgang Puck? Martha Stewart? With so many celebrity chefs constantly popping up in our news feeds and TV sets, it can be hard to keep track of what everybody’s doing, and even harder to decide who’s the cream of the crop – pun intended. </small>
            </div>
        </div>
    );
};

export default Banner;